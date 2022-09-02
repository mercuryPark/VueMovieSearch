<template>
 <div>
   
<input
      class="form-control"
      type="text"
      v-model="$store.state.search"
      placeholder="검색"
      @keypress.enter="$store.commit('selectMovie')"
    />
    <button @click="$store.commit('selectMovie')">검색</button>

    <button @click="$store.commit('test')">검사기</button>

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
  margin-top: 60px;
}
button{
  width: 30px;
  height: 30px;
  border: 1px solid #000;
}
</style>
