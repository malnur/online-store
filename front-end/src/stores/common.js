import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const phoneNumber = ref('+7 (090) 123 45 67')

  return { phoneNumber }
})
