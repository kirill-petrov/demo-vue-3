const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      url: 'https://www.vuemastery.com/',
      inventory: 30,
      onSale: true,
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
