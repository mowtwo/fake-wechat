<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import TitleBar from "./lib/TitleBar.svelte";
  import Dom2Image from "dom-to-image";
  import { saveAs } from "file-saver";

  let WechatNode: HTMLDivElement;

  const onSave = async () => {
    try {
      const blob = await Dom2Image.toBlob(WechatNode);
      saveAs(blob, `faker-wechat-${Date.now()}.png`);
    } catch {
      alert("保存失败");
    }
  };
</script>

<div class="wechat" bind:this={WechatNode}>
  <StatusBar />
  <TitleBar />
</div>

<button class="save" on:click={onSave}>save</button>

<style lang="scss">
  @font-face {
    font-family: "pfcn";
    src: url("pingfangcn.ttf");
  }

  .save {
    position: fixed;
    top: 0;
    left: 0;
  }
  .wechat {
    width: 828px;
    height: 1792px;
    /* margin: 0 auto; */
    background-color: #ededed;
    transform-origin: top center;
    font-size: 24px;
    font-family: "pfcn", "system-ui", "-apple-system";
  }
</style>
