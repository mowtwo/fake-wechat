<script lang="ts">
  import type { ChatType } from './types'
  export let type: ChatType

  export let message: string = ''
</script>

<div class="message {type === 'me' ? 'me' : 'other'}">
  <div class="content">{message}</div>
</div>

<style lang="scss">
  .message {
    max-width: 60%;
    border-radius: 10px;
    position: relative;
    &.me {
      margin-right: 3%;
      background: #9fe771;
    }
    &.other {
      margin-left: 3%;
      background: #fff;
    }
    &.me::after {
      border-left: 10px solid #9fe771;
    }
    &.other::after {
      border-right: 10px solid #fff;
      left: -20px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 40px;
      transform: translateY(-40%);
      right: -20px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
    }
    .content {
      padding: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      line-height: 32px;
      justify-items: flex-start;
      align-items: center;
      box-sizing: border-box;
      font-size: 28px;
    }
  }
</style>
