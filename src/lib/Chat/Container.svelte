<script lang="ts">
  import { tick } from "svelte";

  import { derived } from "svelte/store";

  import Chat from "./Chat.svelte";
  import { chatData } from "./store";
  export let scrollHeight = 0;

  let scrollThis: HTMLDivElement;
  let wrapperThis: HTMLDivElement;
  const hookUpdateChatData = derived(chatData, (data) => {
    tick().then(() => {
      scrollHeight = wrapperThis?.clientHeight ?? 0;
      scrollThis?.scrollTo?.({
        behavior: "smooth",
        top: scrollHeight,
      });
    });
    return data;
  });
</script>

<div class="chatbar">
  <div class="scroll" bind:this={scrollThis}>
    <div class="wrapper" bind:this={wrapperThis}>
      {#each $hookUpdateChatData as { type, message, id } (id)}
        <Chat {type} {message} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .chatbar {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .scroll {
      margin-top: auto;
      margin-right: 5px;
      max-height: 100%;
      overflow-y: auto;
      &:hover {
        &::-webkit-scrollbar {
          width: 5px;
        }
      }
      &::-webkit-scrollbar {
        width: 0;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #767676;
        border-radius: 5px;
      }
      .wrapper {
        padding: 0 20px 20px 30px;
        box-sizing: border-box;
      }
    }
  }
</style>
