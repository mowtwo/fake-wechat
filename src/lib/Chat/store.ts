import { writable } from "svelte/store";
import type { ChatData } from './types';

export const chatData = writable<ChatData[]>([])

export const addChat = (chat: ChatData) => { 
    chatData.update(data => {
        data.unshift(chat);
        return data
    })
}