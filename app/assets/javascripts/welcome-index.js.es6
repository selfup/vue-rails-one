new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    comments: [
      "wow",
      "ok",
      "nice"
    ]
  },
  methods: {
    logIndex(i) {
      console.log(i);
    }
  }
})