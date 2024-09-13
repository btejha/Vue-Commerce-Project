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
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems: [],
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/12345/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },

  async created() {
    const response = await axios.get(`/api/users/12345/cart`);
    console.log("response.data :::", response.data)
    // const cartItems = response.data;
    this.cartItems = response.data;
  }
}

</script>