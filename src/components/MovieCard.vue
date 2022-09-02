<template>
<div v-for="(a,i) in $store.state.title.length" :key="i">
  <img :src="$store.state.poster[i]" alt="">
<h1>제목 : {{$store.state.title[i]}}</h1>
<h1>출시 : {{$store.state.year[i]}}</h1>
<h1>영상타입 : {{$store.state.type[i]}}</h1>
</div>
</template>

<script>
export default {
  name: 'movieCard',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
