<script lang="ts">
  import { onMount } from "svelte";

  import Hover from "../components/Hover.svelte";
  import padZero from "../util/pad-zero";
  import WifiPng from "../assets/ios-wifi.png";

  let deviceTimeValue = "19:00";
  $: deviceTime = deviceTimeValue.split(":");

  let signalMainValue = 4;
  let signalSubValue = 4;

  let signalType = "4G";
  const signalTypes = ["5G", "4G", "3G", "E", "H", "无信号", "WiFi"];

  let energy = 100;
  const energyColorMap = {
    normal: "#0a0a0a",
    low: "#ff4b4b",
    protected: "#f9d24f",
    charge: "#5cd063",
  };
  let batteryType = "normal";
  let batteryTypes = ["normal", "protected", "charge"];
  $: energyColor =
    batteryType === "charge"
      ? energyColorMap.charge
      : batteryType === "protected"
      ? energyColorMap.protected
      : energy <= 20
      ? energyColorMap.low
      : energyColorMap.normal;

  onMount(() => {
    const dt = new Date();
    deviceTimeValue = `${padZero(dt.getHours(), 2)}:${padZero(
      dt.getMinutes(),
      2
    )}`;
  });
</script>

<div class="ios_status_bar">
  <div class="time">
    <Hover>
      {padZero(deviceTime[0] ?? 0, 2)}<span>:</span>{padZero(
        deviceTime[1] ?? 0,
        2
      )}
      <div class="time-select" slot="tools">
        <label for="deviceTime">选择时间</label>
        <input id="deviceTime" type="time" bind:value={deviceTimeValue} />
      </div>
    </Hover>
  </div>
  <div class="right">
    <div class="signal">
      <div class="hover">
        <Hover>
          <div class="main">
            {#each Array(4) as _, i (i)}
              <span class:weak={signalMainValue < i + 1} />
            {/each}
          </div>
          <div class="sub">
            {#each Array(4) as _, i (i)}
              <span class:weak={signalSubValue < i + 1} />
            {/each}
          </div>
          <div class="progress" slot="tools">
            <div class="line">
              <label for="mainSignal">主信号</label>
              <input
                type="range"
                step="1"
                min="0"
                max="4"
                id="mainSignal"
                bind:value={signalMainValue}
              />
            </div>
            <div class="line">
              <label for="subSignal">副信号</label>
              <input
                type="range"
                step="1"
                min="0"
                max="4"
                id="subSignal"
                bind:value={signalSubValue}
              />
            </div>
          </div>
        </Hover>
      </div>
    </div>
    <div class="signal-type">
      <Hover>
        {#if signalType === "WiFi"}
          <div class="wifi">
            <img src={WifiPng} alt="wifi" />
          </div>
        {:else}
          <div class="text">{signalType}</div>
        {/if}
        <div class="select" slot="tools">
          <label for="signalType"> 信号类型 </label>
          <select id="signalType" bind:value={signalType}>
            {#each signalTypes as type (type)}
              <option value={type}>{type}</option>
            {/each}
          </select>
        </div>
      </Hover>
    </div>
    <div class="electric">
      <Hover>
        <div class="battery">
          <div class="wrapper">
            <div
              class="value"
              style="width: {energy}%; background-color: {energyColor};"
            />
          </div>
          <div class="dot" />
        </div>
        <div class="progress" slot="tools">
          <label for="battery">电量</label>
          <input
            type="range"
            step="1"
            min="0"
            max="100"
            id="battery"
            bind:value={energy}
          />
          <label for="batteryType">状态</label>
          <select id="batteryType" bind:value={batteryType}>
            {#each batteryTypes as type (type)}
              <option value={type}>{type}</option>
            {/each}
          </select>
        </div>
      </Hover>
    </div>
  </div>
</div>

<style lang="scss">
  .ios_status_bar {
    display: flex;
    align-items: center;
    height: 95px;
    label {
      font-size: 14px;
      white-space: nowrap;
      margin-right: 10px;
    }
    .time {
      margin-left: 62px;
      display: flex;
      align-items: center;
      font-size: 32px;
      span {
        vertical-align: top;
        font-size: 26px;
        margin: 0 1px;
      }
      .time-select {
        display: flex;
        align-items: center;
      }
    }
    .right {
      margin-left: auto;
      margin-right: 34px;
      display: flex;
      align-items: center;
      gap: 11px;
    }
    .signal {
      .main,
      .sub {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 35px;
      }
      .main {
        span {
          height: 17px;
          @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
              height: #{17 - (4 - $i) * 2}px;
            }
          }
        }
      }
      .sub {
        margin-top: 3px;
        span {
          height: 7px;
        }
      }
      span {
        display: block;
        width: 6px;
        border-radius: 2.5px;
        background-color: #010101;
        &.weak {
          background-color: #bdbdbd;
        }
      }
    }
    .signal-type {
      .wifi {
        img {
          height: 33px;
        }
      }
    }
    .electric {
      position: relative;
      .dot {
        position: absolute;
        overflow: hidden;
        right: -4px;
        top: 8.5px;
        width: 3px;
        &::before {
          content: "";
          display: block;
          width: 9px;
          height: 9px;
          border-radius: 6px;
          background-color: #8b8b8b;
          margin-left: -6px;
        }
      }
      .battery {
        display: inline-block;
        padding: 2px;
        border-radius: 6px;
        border: #8b8b8b solid 2px;
        .wrapper {
          width: 40px;
          .value {
            height: 18px;
            background-color: #000000;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>
