<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie"></movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      No Results.
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>
import genres from '../util/genres'
import MovieItem from './MovieItem.vue'

export default {
  props: ['genre', 'time', 'movies'],
  methods: {
    moviedPassesGenreFilter (movie) {
      if (!this.genre.length) {
        return true
      } else {
        let movieGenres = movie.movie.Genre.split(", ")
        let matched = true
        this.genre.forEach(genre => {
          if(movieGenres.indexOf(genre) === -1) {
            return  matched = false
          }
        })
        return matched
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviedPassesGenreFilter)
    }
  },
  components: {
    MovieItem
  }
}
</script>