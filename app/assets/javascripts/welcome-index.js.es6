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
  mehods: {
    logIt(i) {
      console.log(i);
    }
  }
})