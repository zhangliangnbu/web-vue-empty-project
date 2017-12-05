<template>
  <div>
    index page
    <!--<div>-->
      <!--<p v-for="item in displayList">-->
        <!--Line:-->
        <!--<span v-text="item"></span>-->
      <!--</p>-->
      <!--<infinite-loading @infinite="infiniteHandler">-->
        <!--<span slot="no-more">-->
        <!--There is no more News :(-->
        <!--</span>-->
      <!--</infinite-loading>-->
    <!--</div>-->
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    components: {
      InfiniteLoading
    },
    created () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
      for (let i = 0; i < 73; i++) {
        this.list.push(i)
      }
    },
    data () {
      return {
        list: [],
        displayList: [],
        count: 30
      }
    },
    methods: {
      infiniteHandler ($state) {
        setTimeout(() => {
          let temp = this.list.splice(0, this.count)
          if (temp.length) {
            this.displayList = this.displayList.concat(temp)
            $state.loaded()
          } else {
            $state.complete()
          }
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
