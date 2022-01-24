document.addEventListener("alpine:init", () => {
  Alpine.store("model", {
    list: [
      {
        title: 'cart',
        status: false
      },
      {
        title: 'search',
        status: false
      },
    ],

    get isModelShow() {
      return this.list.some(v => v.status === true)
    },

    get modelShowTitle() {
      return this.list.find(v => v.status == true)?.title || null
    },

    showModel(title) {
      this.list.find(v => v.title = title).status = true
    },

    closeModel() {
      // console.log(this.list);
      this.list.map(v => v.status = false)
    },
  });
});