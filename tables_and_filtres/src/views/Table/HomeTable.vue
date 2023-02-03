<template>
  <div>
    <Table
    :columns="head"
    :rows="data"
    />
  </div>
  </template>

  <script>

  import Table from '../../components/TableComponent.vue'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'HomeTable',

    data () {
      return {
      }
    },

    components: {
      Table
    },

    computed: {
      ...mapState(['head', 'data'])
    },

    methods: {
      ...mapActions(['Change_head'])
    },

    created () {
      this.Change_head()
    }
  }

  </script>

  <style scoped>
  </style>