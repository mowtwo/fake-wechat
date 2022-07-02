<script lang="ts">
  import type { ChatData, ChatType } from './types'
  import Avatar from './Avatar.svelte'
  import Message from './Message.svelte'

  export let type: ChatData['type']
  export let message: ChatData['message']
</script>

<div class="chat {type === 'me' ? 'me' : 'other'}">
  {#if type === 'me'}<Message {type} {message} /> {/if}
  <Avatar />
  {#if type === 'other'}<Message {type} {message} /> {/if}
</div>

<style lang="scss">
  .chat {
    display: flex;
    margin-top: 20px;
    &.me {
      justify-content: flex-end;
    }
    &.other {
      justify-content: flex-start;
    }
  }
</style>
