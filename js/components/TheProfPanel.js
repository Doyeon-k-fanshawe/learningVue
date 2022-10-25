export default {
  name: 'TheProfPanel',

  //props refers to data that can be passed into the components
  // this makes each instance of a repeated component completely dynamic
  // with its own unique data
  
  props: ['prof'],

  template:
    `<section class="prof_panel">
      <h1 @click="showName">{{ name }}</h1>
      <p>some text could go here</p>
      <h4>some subhead here</h4>
    </section>`,

    data() {
      return {
        name: 'Prof name'
      }
    },

    methods: {
      showName()  {
        console.log(this.name);
      }
    }
}