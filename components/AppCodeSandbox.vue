<template>
  <iframe
    :style="{ 'height': iframeHeight }"
    :src="fullUrl"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    class="w-full overflow-hidden"
  ></iframe>
</template>

<script>
export default {
  name: 'AppCodeSandbox',
  props: {
    iframeHeight: {
      type: String,
      default: '500px'
    },
    url: {
      type: String,
      required: true
    },
    theme: {
      type: String
    }
  },
  computed: {
    fullUrl () {
      return `https://codesandbox.io/embed/${this.url}?hidenavigation=1&hidedevtools=1view=preview&theme=${this.theme || this.$nuxt?.$colorMode?.value}`
    }
  }
}
</script>
