<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import TitleBar from "./lib/TitleBar.svelte";
  import ToolsBar from "./lib/ToolsBar.svelte";
  import Dom2Image from "dom-to-image";
  import { saveAs } from "file-saver";

  let WechatNode: HTMLDivElement;

  const onSave = async () => {
    try {
      const blob = await Dom2Image.toBlob(WechatNode, {
        filter(node) {
          if (node instanceof HTMLElement) {
            return !node.classList.contains("tools");
          }
          return true;
        },
      });
      saveAs(blob, `faker-wechat-${Date.now()}.png`);
    } catch (e) {
      console.log(e);
      alert("保存失败");
    }
  };
</script>

<div class="wechat">
  <div class="wrapper" bind:this={WechatNode}>
    <StatusBar />
    <TitleBar />
    <ToolsBar />
  </div>
</div>

<button class="save" on:click={onSave}>save</button>

<style lang="scss">
  @font-face {
    font-family: "pfcn";
    src: url("pingfangcn.ttf");
  }

  .save {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: none;
    background-color: rgb(97, 144, 187);
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    outline: auto;
  }
  .wechat {
    width: 828px;
    height: 1792px;
    margin: 0 auto;
    font-size: 24px;
    font-family: "pfcn", "system-ui", "-apple-system";
    .wrapper {
      height: 100%;
      background-color: #ededed;
      position: relative;
    }
  }
</style>
