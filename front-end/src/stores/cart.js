import { reactive, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import { notification } from 'ant-design-vue'

export const useCartStore = defineStore('cart', () => {
  const content = reactive([])
  const basket = readonly(content)

  const count = computed(() => {
    return content.length
  })
  const total = computed(() => {
    let result = 0
    content.forEach((item) => {
      result += item.price * item.count
    })
    return Math.round(100 * result) / 100
  })

  const addItem = (item, count, optionValue = null) => {
    const found = content.find(
      (raw) => raw.id == item._id && (!optionValue || raw.option == optionValue)
    )
    if (found) {
      found.count += count
    } else {
      const obj = {}
      obj.id = item._id
      obj.name = item.name
      obj.option = optionValue
      obj.price = item.options?.length > 0
        ? item.options.find((item) => item.value === optionValue).price
        : item.price
      obj.count = count
      content.push(obj)
    }

    notify(`Added ${count > 1 ? count + ' ' : ''}${item.name} to cart`)
  }

  const removeItem = (itemId) => {
    const found = content.find((item) => item.id == itemId)
    if (found) {
      const index = content.indexOf(found)
      if (index > -1) {
        content.splice(index, 1)

        notify(`Removed ${found.name} from cart`)
      }
    }
  }

  const reset = () => {
    const bought = total.value
    content.splice(0)

    notify('Going, going, (almost) gone', 'You bought fruits for $' + bought)
  }

  return { basket, count, total, addItem, removeItem, reset }
})

const notify = (description, message = null) => {
  notification.success({
    message: message,
    description: description
  })
}
