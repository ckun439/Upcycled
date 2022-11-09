
new Vue({
    el: '#display-items',
    data () {
      return {
        listings: null,
        count: 0,
        id: '62f45cd0215769c99251a310',
        title: 'filler',
        size: 'S',
        price: '$',
        description: 'filler',
        show: false,
      }
    },

    /* GET request returning all listing info */
    mounted () {
      axios
        .get('http://localhost:5000/api/posts/')
        .then(response => (this.listings = response.data))
        .catch(error => console.log(error))
    },

    methods: {
    
      /* DELETE request that takes a listing ID and deletes based on this */    

      deletePost: function(entered_id){
        this.id = entered_id;
        return axios.delete(`http://localhost:5000/api/posts/${this.id}`)
        .then(response => (this.listings = response.data)),
        location.reload();
      },

      /* UPDATE request that talkes a listing id and updates the info based on what is edited */

      printVariables: function(title, size, desc, price, id) {
        console.log(title, size, desc, price, id);
        return axios.patch(`http://localhost:5000/api/posts/${id}`,{title: title, size: size, description: desc, price: price}),
        console.log(this.submit),
        location.reload();
        
      },
      refresh: function() {
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
    description: 'Example Text',
    price: '$',
    submit: false
  },
  
  /* POST request that creates a brand new listing */
  methods: {
    createPost: function(){
      return axios.post('http://localhost:5000/api/posts/', {userID: this.userID, title: this.title, size: this.size, description: this.description, price: this.price}),
      console.log(this.submit)
    }
  }

});
