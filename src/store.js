import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state(){
    return {
      title : ['Top Gun: Maverick','Jurassic World Dominion','Doctor Strange in the Multiverse of Madness','Minions: The Rise of Gru','The Batman','Thor: Love and Thunder','Fantastic Beasts: The Secrets of Dumbledore','Sonic the Hedgehog 2','Uncharted','Elvis'],
      type : ['movie','movie','movie','movie','movie','movie','movie','movie','movie','movie'],
      year : ['2022','2022','2022','2022','2022','2022','2022','2022','2022','2022'],
      poster : ['https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
      'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BODRlNTY5ZjktZjE0Ni00YjZhLTk3NTItYzk0ZjYxN2QxMWEzXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg','https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg',
      'https://m.media-amazon.com/images/M/MV5BYzMzNTJjYmMtZTkxNS00MjI4LWI3YmQtOTQ4MDZjZDJlZjQyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_SX300.jpg'],
      search : '',
      mtitle : '',
      noPost : 0,
      noPicture : [],
      start:0,
      boxOffice : [1,2,3,4,5,6,7,8,9,10],
      length: 1
      
      
    }
  },
  methods:{
  
  },
  mutations:{
    test(state){
      console.log(state.dataBox);
    },
  
    selectMovie(state){
      // 검색할때마다 초기화
      state.title = [];
      state.type = [];
      state.year = [];
      state.poster = [];
      state.start = 1;
      state.length = 1;
      
      // api 계정 정보
      const apiKey = 'fac1af98'
      const id = 'tt3896198'
    
      // 검색창 value를 api url안에 할당
      state.mtitle = state.search;
      state.noPost = 0
      // console.log(state.noPost)
      // omdbapi 호출
      if(state.mtitle.length < 3){
        state.length = 2
        console.log(state.length)
      }
        
      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}&s=${state.mtitle}`).then( 결과 => {
      for(let i = 0; i < parseInt(결과.data.totalResults); i++){
     // state.dataBox.push(결과.data.Search[i]);
    //  console.log(state.noPicture[i])
     state.title.push(결과.data.Search[i].Title); // 영화 제목
     state.type.push(결과.data.Search[i].Type); // 영화 출시일
     state.year.push(결과.data.Search[i].Year); // 영화 장르
     state.poster.push(결과.data.Search[i].Poster); // 영화 포스터
     if(state.poster[i] == 'N/A'){
      state.poster[i] = '/img/85488.5b167434.png'
      state.noPicture[i] = false
      // console.log('ㅎㅇ')
      // console.log(state.noPicture[i])
     }
     state.search = ''
     
    

  }
    }).catch(e => {
      // console.log('error')
      console.log(e)
      for(let i = 0; i < 10; i++){
      if(state.poster[i] == 'N/A'){
        state.poster[i] = '/img/85488.5b167434.png'
        state.noPicture[i] = false
        // console.log(state.noPicture[i])
      }
    }
    
      
      if(state.title.length == 0){
        // 아무것도 검색되지 않았을때
      state.noPost = 1
    }
    state.search = ''
      
    })
  }
 
   
   
    }
  
})

export default store