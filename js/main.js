// import all of the Vue components here 
import ProfPanel from './components/TheProfPanel.js';

(() => {
  // this imports the Vue library as a variable called Vue
  const { createApp } = Vue

  createApp({
    created() {
      console.log("Vue instance is created");
      // fetch the remote data here and pass it to the data object

      fetch("./data.json")
        .then(res => res.json())
        .then(data => {
          console.log(data);

          // push the data into the vue instance
          // the "this" keyword inside of the Vue instance ALWAYS refers to the instance itself
          this.remoteData = data;
        })
      .catch(error => console.error(error));
    },

    data() {
      return {
        welcome: 'Hello Vue!',
        name: 'Your Name Here',

        profs: ['Joe', 'John', 'Justin', 'Jarrod'],
        remoteData: {},
        username: '',
        password: '',
        currentProf: {}
      }
    },

    methods : {
      logClick() {
        console.log("clicked!");
      },

      sendFormData() {
        console.log(this.username, this.password);
      },

      showMyData(data) {
        console.table(data);
        this.currentProf = data;
      },

    },

    components: {
      theprofpanel: ProfPanel
    }

  }).mount('#app');

})();