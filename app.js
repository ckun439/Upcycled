new Vue({
    el: '#display-items',
    data () {
      return {
        listings: null,
        count: 0,
        id: "62f45cd0215769c99251a310"
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
      },

      deletePost: function(entered_id){
        this.id = entered_id;
        return axios.delete(`http://localhost:5000/api/posts/${this.id}`)
        .then(response => (this.listings = response.data)),
        location.reload();
      }
      
    }
    
});

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
