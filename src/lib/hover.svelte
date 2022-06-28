<script lang="ts">
  import { fade } from "svelte/transition";

  let show = false;
</script>

<div class="hover" on:click={() => (show = true)}>
  <div class="default">
    <slot />
  </div>
  <div class="mask" />
  {#if show}
    <div class="tools" transition:fade={{ duration: 300 }}>
      <slot name="tools" />
      <div class="close" on:click|stopPropagation={() => (show = false)}>
        关闭
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .hover {
    position: relative;
    display: inline-block;
    &:hover {
      .mask {
        opacity: 1;
      }
    }
    .mask {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border: #ccc solid 2px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .tools {
      position: absolute;
      top: calc(100% + 15px);
      left: 50%;
      transform: translateX(-50%);
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 8px;
      padding: 10px 14px 20px;
      box-shadow: rgba($color: #000000, $alpha: 0.2) 0 0 4px;
      .close {
        position: absolute;
        font-size: 12px;
        display: inline-block;
        padding: 4px 8px;
        background-color: red;
        color: #fff;
        border-radius: 4px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
      }
    }
  }
</style>
