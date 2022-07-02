<script lang="ts">
  import Chat from './Chat.svelte'
  import type { ChatData } from './types'

  const data = [] as ChatData[]
</script>

<div class="chatbar">
  {#each data as item}
    <Chat {...item} />
  {/each}
</div>

<style lang="scss">
  .chatbar {
    width: 100%;
    padding: 0 30px 20px 30px;
    box-sizing: border-box;
  }
</style>
