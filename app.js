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

const axios = require('axios')
new Vue({
  el: '#insert-listing',
  data : {
    userID: 1,
    title: 'dasd',
    size: 'sad',
    description: "akshdondsoin",
    price: 'dsads'
  },

});