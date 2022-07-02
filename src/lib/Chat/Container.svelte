<script lang="ts">
  import Chat from './Chat.svelte'
  import { chatData } from './store'
</script>

<div class="chatbar">
  {#each $chatData as item (item.id)}
    <Chat {...item} />
  {/each}
</div>

<style lang="scss">
  .chatbar {
    width: 100%;
    padding: 0 30px 20px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
