<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Hey {{name}}</h3>
    <h3 class="david">Hey {{id}}</h3>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        name: 'David M Chisenga',
        id: '1905259'
      }
    }
  }
</script>


<style>
  .david{
    color: green;
  }
</style>