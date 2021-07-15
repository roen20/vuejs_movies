<template>
  <div id="app">
    <header class="navbar sticky-top flex-md-nowrap p-0 ">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-2" href="#">
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" @input="getSearch">
      </a>


    </header>
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div v-if="listOfMovies.length != 0">
              <div class="position-sticky pt-3">
                <div>
                  <MovieList v-for="list in listOfMovies" :key="list" :title="list.Title" :year="list.Year"  @click.native="getDetails(list.imdbID)"/>
                </div>
              </div>
              <div class="text-center mt-5">
              <button class="btn btn-primary btn-sm" @click="getPrevPage(1,totalResults);">Prev</button>
              <b class="m-5">Page {{getpage}}</b>
              <button class="btn btn-primary btn-sm" @click="getNextPage(1,totalResults);">Next</button>
              <h4>{{totalResults||0}} Results</h4>
              </div>
            </div>
            <div class="text-center mt-5" v-else><h4>0 Results</h4></div>
        </nav>

        <Movies :details="movieDetail"/>
      </div>
    </div>
  </div>
</template>

<script>
import Movies from './components/Movies.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    Movies,
    MovieList
  },
  data(){
    return {
      searchMovie: '',
      listOfMovies:[],
      movieDetail: [],
      totalResults: '',
      getpage: 1
    }
  },
  methods: {
    async getSearch(event){
      this.searchMovie = event.target.value;
      await this.$axios.get('https://www.omdbapi.com/?s='+this.searchMovie+'&apikey=8a7231da').then((response) => {
        if(response.status == 200){
          if(response.data.Response == "True"){
            this.listOfMovies = response.data.Search
            this.totalResults = response.data.totalResults
          }
        }
      }).catch((error) => {
        console.log(error)
      });
    },

    async getDetails(details) {
      console.log(details)
        await this.$axios.get('https://www.omdbapi.com/?i='+details+'&apikey=8a7231da').then((response) => {
            if(response.status == 200){
                console.log(response)
                this.movieDetail = response.data
            }
        }).catch((error) => {
            console.log(error)
        });
    },
    moviesWithPage(){
      this.$axios.get('https://www.omdbapi.com/?s='+this.searchMovie+'&apikey=8a7231da&page='+this.getpage).then((response) => {
        if(response.status == 200){
          if(response.data.Response == "True"){
            this.listOfMovies = response.data.Search
            this.totalResults = response.data.totalResults
          }
        }
      }).catch((error) => {
        console.log(error)
      });
    },
    getNextPage(num){
      let total = Math.ceil(this.totalResults/10);
      if(total == this.getpage){
        this.getpage = total;
      }else{
        this.getpage += num;
      }
      this.moviesWithPage();
    },
    getPrevPage(num){
      if(this.getpage != 1){
        this.getpage -= num;
      }else{
        this.getpage = 1;
      }
      this.moviesWithPage();
    }
  }
}
</script>

<style>

</style>
