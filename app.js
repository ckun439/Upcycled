new Vue({
    el: '#display-items',
    data () {
      return {
        listings: null
      }
    },

    mounted () {
      axios
        .get('http://localhost:5000/api/posts/')
        .then(response => (this.listings = response.data))
        .catch(error => console.log(error))
    }
  })