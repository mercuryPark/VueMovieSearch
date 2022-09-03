<template>
 <div>
   <div style="display:flex; align-items:center;">
     <a href="/">
   <img class="mainSiteTitle" src="./assets/vueMovie.png" alt="">
   </a>

   <div class="input-group input-group-lg">
  <!-- <span class="input-group-text" id="inputGroup-sizing-lg">Large</span> -->
  <input
      class="form-control mainSiteInput"
      type="text"
      v-model="$store.state.search"
      placeholder="Can search for more than 3 characters"
      @keypress.enter="$store.commit('selectMovie')"
    />
    </div>
</div>

<div class="noPost" v-if="$store.state.noPost == 1">
  <img class="noPostImg" src="./assets/oops.png" alt="" >
  <h1 class="noSearching" v-if="$store.state.length == 1" >검색된 게시물이 없습니다.</h1>
  <h1 class="noSearching" v-if="$store.state.length == 2">3글자 이상으로 검색해주세요.</h1>
</div>

   <MovieCard />
  
   
 
  </div>
</template>

<script> 

import MovieCard from './components/MovieCard.vue'
import Search from './components/Search.vue'
export default {
  
  name: 'App',
  data(){
  return {
    
  }
 
  },
  mounted(){

  },
 methods: {
      
      
  },
  
  components: { 
    MovieCard,
    Search,
    },

   
 
 
  



    
}
 


  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
/* button{
  width: 30px;
  height: 30px;
  border: 1px solid #000;
} */
</style>
