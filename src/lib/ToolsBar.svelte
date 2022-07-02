<script lang="ts">
  import Icon from './ToolsBarIcon.svelte'
  import Input from './ToolsBarInput.svelte'
</script>

<div class="ios_toolsbar">
  <div class="home_indicator" />
  <div class="tools">
    <Icon type="asr" />
    <Input />
    <Icon type="emoji" />
    <Icon type="tools" />
  </div>
</div>

<style lang="scss">
  .ios_toolsbar {
    width: 100%;
    height: 160px;
    background: #f6f6f6;
    border-top: 1px solid #f5f5f5;
    position: absolute;
    bottom: 0;

    .tools {
      box-sizing: border-box;
      padding: 20px 30px 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 26px;
    }
    .home_indicator {
      width: 50%;
      height: 10px;
      background: #000;
      position: absolute;
      bottom: 20px;
      border-radius: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
