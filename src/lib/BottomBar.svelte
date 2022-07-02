<script lang="ts">
  import Icon from './BottomBarIcon.svelte'
  import Input from './BottomBarInput.svelte'
</script>

<div class="ios_bottombar">
  <div class="home_indicator" />
  <div class="bottom">
    <Icon type="asr" />
    <Input />
    <Icon type="emoji" />
    <Icon type="tools" />
  </div>
</div>

<style lang="scss">
  .ios_bottombar {
    width: 100%;
    min-height: 160px;
    background: #f6f6f6;
    border-top: 1px solid #f5f5f5;
    position: absolute;
    bottom: 0;

    .bottom {
      box-sizing: border-box;
      padding: 10px 20px 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 26px;
    }
    .home_indicator {
      width: 30%;
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
