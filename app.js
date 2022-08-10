new Vue({
    el: '#display-items',
    data () {
      return {
        listings: null,
        count: 0
      }
    },

    mounted () {
      axios
        .get('http://localhost:5000/api/posts/')
        .then(response => (this.listings = response.data))
        .catch(error => console.log(error))
    },

    methods: {
      add: function(inc){
        console.log(this.count)
        this.count += inc;
      }
    }
  })

new Vue({
  el: '#insert-listing',
  data : {
    userID: 1,
    title: 'My Listing',
    size: 'Example Size',
    description: "Example Text",
    price: '$',
    submit: false
  },

  methods: {
    createPost: function(){
      return axios.post('http://localhost:5000/api/posts/', {userID: this.userID, title: this.title, size: this.size, description: this.description, price: this.price}),
      console.log(this.submit)
    }
  }

});