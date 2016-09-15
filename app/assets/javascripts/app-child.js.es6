Vue.component('app-child', {
  props: ['comments', 'logindex'],
  template: `
    <section class='messages' v-for='comment in comments'>
      <h4 @click=logindex($index)>{{ comment }}</h4>
    </section>
  `
})