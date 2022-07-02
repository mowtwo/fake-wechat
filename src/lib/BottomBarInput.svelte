<script lang="ts">
  import { addChat } from './Chat/store'

  let value: string = ''

  const add = (message: string) => {
    addChat({
      type: 'other',
      message,
      id: `${Date.now()}`,
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      add(value)
      value = ''
    }
  }
</script>

<div class="bottombar_input">
  <input class="input" bind:value on:keydown={handleKeyDown} />
</div>

<style lang="scss">
  .bottombar_input {
    width: 72%;
    height: 70px;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    .input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      font-size: 32px;
      padding: 10px;
      box-sizing: border-box;
    }
  }
</style>
