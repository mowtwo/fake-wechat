<script lang="ts">
  import { fly } from 'svelte/transition'
  import type { ChatData } from './types'
  import Avatar from './Avatar.svelte'
  import Message from './Message.svelte'

  export let type: ChatData['type']
  export let message: ChatData['message']
</script>

<div
  class="chat {type === 'me' ? 'me' : 'other'}"
  transition:fly={{ y: 100, duration: 300 }}
>
  {#if type === 'me'}<Message {type} {message} /> {/if}
  <Avatar />
  {#if type === 'other'}<Message {type} {message} /> {/if}
</div>

<style lang="scss">
  .chat {
    display: flex;
    margin-top: 20px;
    width: 100%;
    &.me {
      justify-content: flex-end;
    }
    &.other {
      justify-content: flex-start;
    }
  }
</style>
