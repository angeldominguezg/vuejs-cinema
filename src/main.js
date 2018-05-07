import './style.scss'
import Vue from 'vue'
import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

import vueResource from 'vue-resource'
Vue.use(vueResource)

new Vue({
  el: '#app',
  data: {
    time: [],
    genre: [],
    movies: []
  },
  methods: {
    checkFilter(category, title, checked) {
      console.log('[checkFilter]: ', category, title, checked)
      if (checked) {
        this[category].push(title)
      } else {
        let index = this[category].indexOf(title)
        if (index > -1) {
          this[category].splice(index, 1)
        }
      }
    }
  },
  components: {
    MovieList,
    MovieFilter
  },
  created() {
    this.$http
      .get('/api')
      .then(response => {
        console.log('[created]', response.data)
        this.movies = response.data
      })
      .catch(error => {
        console.log('[created]', error)
      })
  }
})
