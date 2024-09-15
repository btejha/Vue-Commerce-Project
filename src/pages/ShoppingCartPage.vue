<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList @remove-from-cart="removeFromCart($event)" :products="cartItems"/>
    <button class="checkout-button">Proceed to checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    <h3>Currently you have no items in your cart</h3>
  </div>
</template>

<script>
import axios from "axios";
import ShoppingCartList from "@/components/ShoppingCartList";

export default {
  name: "ShoppingCartPage",
  props: ['user'],
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems: [],
    }
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const cartResponse = await axios.get('/api/users/${newUserValue.uid}/cart')
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },

  async created() {
    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      this.cartItems = response.data;
    }
  }
}

</script>