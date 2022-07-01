<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import TitleBar from "./lib/TitleBar.svelte";
</script>

<div class="wechat">
  <StatusBar />
  <TitleBar />
</div>

<style lang="scss">
  @font-face {
    font-family: "pfcn";
    src: url("pingfangcn.ttf");
  }
  .wechat {
    width: 828px;
    height: 1792px;
    margin: 0 auto;
    background-color: #ededed;
    transform-origin: top center;
    font-size: 24px;
    font-family: "pfcn", "system-ui", "-apple-system";
  }
</style>
