<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" v-if="details.length != 0">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2">{{details.Title}}</h1>
      </div>
      <div class="mt-2 mb-2">
          <b>{{details.Genre}}</b>
      </div>
    <div class="row">
        <div class="col-6">
            <p>
                {{details.Plot}}
            </p>
            <p>Language: {{details.Language}}</p>
            <p>Director: {{details.Director}}</p>
            <p>Actors: {{details.Actors}}</p>
            <p>Duration: {{details.Runtime}}</p>
        </div>
        <div class="col-6">
            <img v-bind:src="details.Poster" class="img-thumbnail" alt=""/>
        </div>
    </div>
    </main>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" v-else>
        <h2> No Results </h2>
    </main>
</template>



<script>

export default {
  name: 'Movies',
  props: {
      details: []
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>