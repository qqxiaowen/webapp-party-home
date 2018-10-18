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
body {
  font-size: 16px;
}
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
.loading{
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.4rem auto;
}
</style>
<style lang="less">
.detail{
    padding: 0.2rem;
    .title{
        font-size: 0.5rem;
        margin: 0.2rem 0;
    }
    .content{
        line-height: 0.5rem;
        
    }
  /deep/ p{
      font-size: 14px;
      margin: 0.2rem 0;
      line-height: 2;
  }
  /deep/ h2{
      font-size: 22px;
      margin: 0.2rem 0;
      font-weight: 500;
  }
  /deep/ h4{
      font-size: 18px;
      margin: 0.2rem 0;
      font-weight: 500;
  }
  /deep/ span{
      font-size: 16px;
  }
  /deep/ img{
  display: block;
  max-width:100%;
  margin: 0.2rem 0;
  }
}
</style>
