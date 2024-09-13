<template>
  <div v-if="products && products.length > 0">
    <div class="product-container" v-for="product in products" :key="product?.id">
      <img class="product-image" :src="product?.imageUrl" alt="Product Image"/>
      <div class="details-wrap">
        <h3>{{ product?.name }}</h3>
        <p>{{ product?.price }}</p>
      </div>
      <button @click="$emit('remove-from-cart', product?.id)" class="remove-button">Remove from cart</button>
    </div>
  </div>
  <div v-else>
    <p>Your cart is empty</p>
  </div>
</template>

<script>

export default {
  name: "ShoppingCartList",
  props: ['products'],
  emits: ['remove-from-cart'],
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    }
  },
}

</script>