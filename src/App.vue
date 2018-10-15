<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
 * {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .flr {
    float: right;
  }
  .fll {
    float: left;
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .pt110{
    padding-top: 1.1rem;
  }
  .pb104{
    padding-bottom: 1.04rem;
  }
</style>