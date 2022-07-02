<script lang="ts">
  import Hover from '../components/Hover.svelte'
  import LeftPng from '../assets/ios-arrow-left.png'
  import MorePng from '../assets/more.png'

  let title = '厦门先遣队(13)'
</script>

<div class="titlebar">
  <div class="return">
    <img src={LeftPng} alt="left" />
  </div>
  <div class="text">
    <Hover>
      {title}
      <div class="editor" slot="tools">
        <label for="titleEditor"> 群聊名字 </label>
        <input type="text" bind:value={title} id="titleEditor" />
      </div>
    </Hover>
  </div>
  <div class="more">
    <img src={MorePng} alt="more" />
  </div>
</div>

<style lang="scss">
  .titlebar {
    position: relative;
    height: 90px;
    border-bottom: #d8d8d8 solid 1px;
    .text {
      text-align: center;
      line-height: 90px;
      white-space: nowrap;
      font-weight: bold;
      font-size: 32px;
    }
    .return,
    .more {
      position: absolute;
      display: flex;
      height: 100%;
      top: 0;
      align-items: center;
    }
    .return {
      left: 34px;
      img {
        height: 35px;
      }
    }
    .more {
      right: 38px;
      img {
        width: 36px;
      }
    }
  }
</style>
