<template>
  <div>
    index page
    {{list}}
  </div>
</template>

<script>
  export default {

    created () {
      // this.$api.get('topics', null, r => {
      //   // console.log(r)
      // })
      this.$psapi.get('topics', null)
        .then(value => {
          console.log('success', value)
        }, fv => {
          console.log('fail', fv)
        })
      for (let i = 0; i < 73; i++) {
        this.list.push(i)
      }
      // this.timeout(1000).then(value => {
      //   console.log(value)
      // })
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
