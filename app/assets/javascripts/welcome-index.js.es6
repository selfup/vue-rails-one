new Vue({
  el: '#app',
  components: {
    AppParent
  },
  template: `
    <div>
      <app-parent></app-parent>
    </div>
  `
})

// in the template I am pass down the comments array into 'app-child' as a prop
// :comments='comments' letting the child know that the prop 'comments' will
// now be the data available to the child as a prop

// also doing this with the logIndex(i) function
// functions that get passed down need to be lower case