<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import TitleBar from "./lib/TitleBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import ChatBar from "./lib/Chat/Container.svelte";
  import Dom2Image from "dom-to-image";
  import { saveAs } from "file-saver";
  import { chatData } from "./lib/Chat/store";
  import { tick } from "svelte";
  import Hover from "./components/Hover.svelte";

  let WechatNode: HTMLDivElement;
  let maxSaveChatLines = 10;

  const onSave = async () => {
    const saveChatData = $chatData;
    chatData.set(
      saveChatData.slice(
        saveChatData.length - maxSaveChatLines,
        saveChatData.length
      )
    );
    await tick();
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
    } finally {
      chatData.set(saveChatData);
    }
  };
</script>

<div class="wechat">
  <div class="wrapper" bind:this={WechatNode}>
    <div class="title">
      <StatusBar />
      <TitleBar />
    </div>
    <div class="wrapper-content">
      <ChatBar />
      <BottomBar />
    </div>
  </div>
</div>

<div class="save">
  <Hover outline={false} toolsPosition="left">
    <div class="text">save</div>
    <div class="config" slot="tools">
      <div class="tip">
        由于某些功能缺陷，截图只能截图最顶部，所以请适当调节消息的行数
      </div>
      <label for="saveLines"> 截图信息行数 </label>
      <input type="number" min="0" step="1" bind:value={maxSaveChatLines} />
      <br />
      <button on:click={onSave}>确定</button>
    </div>
  </Hover>
</div>

<style lang="scss">
  @font-face {
    font-family: "pfcn";
    src: url("pingfangcn.ttf");
  }

  .save {
    position: fixed;
    bottom: 50px;
    right: 50px;
    .text {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      border: none;
      background-color: rgb(97, 144, 187);
      color: #fff;
      font-size: 30px;
      line-height: 120px;
      text-align: center;
    }
    .config {
      text-align: center;
      .tip {
        text-align: left;
        font-size: 12px;
        color: #aaa;
      }
    }
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
      .title {
        display: absolute;
        left: 0;
        top: 0;
      }
      .wrapper-content {
        display: flex;
        flex-direction: column;
        // 减去上面的内容
        height: calc(100% - 95px - 91px);
        justify-content: flex-end;
      }
    }
  }
</style>
