<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems"/>
    <button class="checkout-button">Proceed to checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    <h3>Currently you have no items in your cart</h3>
  </div>
</template>

<script>
import {cartItems} from "@/temp-data";
import ShoppingCartList from "@/components/ShoppingCartList";

export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartItems,
    }
  },
  components: {
    ShoppingCartList,
  }
}

</script>