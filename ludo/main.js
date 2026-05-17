const app = Vue.createApp({
  data() {
    return {
      colors: ['red', 'green', 'yellow', 'blue'],
    };
  },
  methods: {
    shouldCellHaveArrow(color, pathN, cellN) {
      if (color == 'red' && pathN == 2 && cellN == 1) return true;
      if (color == 'green' && pathN == 2 && cellN == 1) return true;
      if (color == 'yellow' && pathN == 2 && cellN == 6) return true;
      if (color == 'blue' && pathN == 2 && cellN == 6) return true;
    },

    shouldCellHaveStar(color, pathN, cellN) {
      if (color == 'red' && pathN == 3 && cellN == 3) return true;
      if (color == 'green' && pathN == 1 && cellN == 3) return true;
      if (color == 'yellow' && pathN == 1 && cellN == 4) return true;
      if (color == 'blue' && pathN == 3 && cellN == 4) return true;
    },

    shouldGalleryBeVertical(color) {
      if (color == 'green' || color == 'blue') return true;
    },
  },
});

app.mount('#app');
