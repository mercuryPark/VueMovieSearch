import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state(){
    return {
      title : [],
      type : [],
      year : [],
      poster : [],
      search : '',
      mtitle : '',
      dataBox : []
    }
  },
  methods:{
    
  },
  mutations:{
    test(state){
      console.log(state.dataBox);
    },
    
    selectMovie(state){
      const apiKey = 'fac1af98'
      const id = 'tt3896198'
      let mtitle = '&s=' + state.mtitle;
    let titlebox = state.title;
  let imgbox = state.poster;
  let typebox = state.type;
  let yearbox = state.year;

  // state.title.push(state.search)
  state.mtitle = state.search;

   axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey} + ${mtitle}`).then( 결과 => {
     for(let i = 0; i < 10; i++){
      // state.dataBox.push(결과.data.Search[i]);
    titlebox.push(결과.data.Search[i].Title); // 영화 제목
    typebox.push(결과.data.Search[i].Type); // 영화 출시일
    yearbox.push(결과.data.Search[i].Year); // 영화 장르
    imgbox.push(결과.data.Search[i].Poster); // 영화 포스터
     }
     
       
 
  
     })
   
    }
  }
})

export default store