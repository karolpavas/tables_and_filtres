<template>
  <div class="container">
    <Title/>
    <Table
    :columns="head"
    :rows="data"
    />
  </div>
  </template>

  <script>

  import Table from '../../components/TableComponent.vue'
  import Title from '../../components/Title.vue'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'HomeTable',

    data () {
      return {
      }
    },

    components: {
      Table,
      Title
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

  <style lang="css">
  .container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  </style>