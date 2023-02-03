<template>
    <div id="container-title-indicators">
      <div id="title">
        <b>{{ title }}</b>
      </div>
    </div>
  </template>

  <script>

  export default {
    name: 'ViewsTitle',

    props: {
      title: {
        default: 'RETO CONVOCATORIA',
        type: String
      }
    }
  }
  </script>
  <style scoped>

  #container-title-indicators {
    cursor: default;
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  #title {
    color: rgb(100, 120, 20);
    margin-top: 1em;
    padding-bottom: .7em;
    font-size: 1.5em;
    border-bottom: .1rem dashed;
    width: 85%;
    margin-left: 6rem;
  }

  @media (max-width: 769px) {
  #container-title-indicators {
    margin: 1em 1em 1em;
  }
  }
</style>