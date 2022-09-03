<template>
<!-- <div v-for="(a,i) in $store.state.title.length" :key="i">
  <img :src="$store.state.poster[i]" alt="">
<h1>제목 : {{$store.state.title[i]}}</h1>
<h1>출시 : {{$store.state.year[i]}}</h1>
<h1>영상타입 : {{$store.state.type[i]}}</h1>
</div> -->
<div class="lanking" v-if="$store.state.start == 0">
  <h1>Top 2022 Movies at the Worldwide Box Office</h1>
</div>
<div class="mainCardContainer">
<div class="mainCard">
<div  class="card" v-for="(a,i) in $store.state.title.length" :key="i">
  <div class="boxoffice" v-if="$store.state.start == 0">
    <span>{{$store.state.boxOffice[i]}}</span>
  </div>
<p id="pointType" :class="[$store.state.type[i] == 'movie'?'movie':'series']"
 class="movieType">{{$store.state.type[i]}}</p>
  <img  :src="$store.state.poster[i]" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{$store.state.title[i]}}</h5>
    <p class="card-text" style="color:#FDC045">{{$store.state.year[i]}}</p>
  </div>
</div>
</div>
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
img{
  /* width: 210px; */
  height: 310px;
  /* padding: 6px; */
  /* border-radius: 30px;/ */
}
</style>
