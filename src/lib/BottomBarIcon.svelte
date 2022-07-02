<script lang="ts" context="module">
  // 语音识别 表情 更多
  type IconType = 'asr' | 'emoji' | 'tools'
</script>

<script lang="ts">
  import IconHappy from '../components/IconHappy.svelte'
  import IconContainer from '../components/IconContainer.svelte'
  import IconPlus from '../components/IconPlus.svelte'
  import WifiPng from '../assets/ios-wifi.png'

  export let type: IconType
</script>

<div class="icon-container">
  {#if type === 'asr'}
    <IconContainer>
      <img src={WifiPng} class="asr" alt="voice" />
    </IconContainer>
  {:else if type === 'emoji'}
    <IconHappy />
  {:else}
    <IconContainer>
      <IconPlus />
    </IconContainer>
  {/if}
</div>

<style lang="scss">
  .icon-container {
    width: 48px;
    height: 48px;
    .asr {
      width: 70%;
      height: 70%;
      transform: rotate(90deg);
    }
  }
</style>
