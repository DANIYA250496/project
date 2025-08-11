console.log('JS loaded!!!');
const app=Vue.createApp({
    /// The data for the user input
    data(){
        return {
            Name:'',
            Age:'',
              
        }
        },
     created() {
            this.fetchuserinput();
            },

    /// computed for weather module 
    computed:{
         city(){
     return this.London;
         },
        province(){
            return this.Ontario;
        },
        country(){
            return this.Canada;
        },
         Temperature(){
        return this.sunny;
         },
        Wind(){
            return this.rain;
        },
        Description(){
            return this.etc;
        },
         /// computed for dictionary module
        word(){
        return this.word;
         },
        phonetics(){
            return this.phonetics;
        },
        Definition(){
            return this.Definition;
        },
        

        
    },
    /// methods for fetching user input
    methods:{
    fetchuserinput() {
      fetch('https://comp6062.liamstewart.ca/random-user-data')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('An error occured. Please try again.');
          }
        })
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          console.log('Total Failure');
        });
    }
    
  },
  /// methods for fetching weather module
  fetchweather() {
      fetch('https://comp6062.liamstewart.ca/weather-data')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('An error occured. Please try again.');
          }
        })
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          console.log('Total Failure');
        });
    }
  },
  {
    /// methods for fetching dictionary
  fetchdictionary() {
      fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('An error occured. Please try again.');
          }
        })
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          console.log('Total Failure');
        });
    }

});

app.mount('#app');
/// Mount the Vue app to the div with id "app"