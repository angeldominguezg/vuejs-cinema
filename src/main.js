import './style.scss'
import Vue from 'vue'
import generes from './util/genres'

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                    <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                  </div>`,
      data() {
        return {
          movies: [
            { title: 'Pulp Fiction' },
            { title: 'Home Alone' },
            { title: 'Austin Powers' }
          ]
        }
      }
    },
    'movie-filter': {
      data () {
        return {
          generes
        }
      },
      template: `<div id="movie-filter">
                    <h2>Filter result</h2>
                    <div class="filter-group">
                      <check-filter v-for="genere in generes"></check-filter>
                    </div>
                  </div>`,
      components: {
        'check-filter': {
          template: `<div>Filter</div>`
        }
      }
    }
  }
})
