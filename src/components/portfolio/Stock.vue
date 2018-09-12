<template>
  <b-col sm="12" md="4">
    <b-card deck
            border-variant="danger"
            :img-alt="stockObj.name"
            img-fluid
            :header="stockObj.name"
            :footer="`${stockPrice} | Quantity: ${stockQuantity}`"
            footer-bg-variant="danger"
            footer-text-variant="white"
            class="text-center">
        <p class="card-text">
          <b-input-group prepend="Quantity">
            <b-form-input
              v-model="quantity"
              type="number"
              min="0"
              :max="stockQuantity"
              placeholder=""></b-form-input>
            <b-btn
              :disabled="quantity <= 0 || Number.isInteger(quantity) || quantity > stockQuantity"
              variant="outline-danger"
              @click="sellStock">Sell</b-btn>
          </b-input-group>
        </p>
    </b-card>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'stockObj'
  ],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      executeSale: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stockObj.id,
        stockPrice: this.stockObj.price,
        quantity: this.quantity
      }
      this.executeSale(order)
      this.quantity = 0
    }
  },
  computed: {
    stockPrice: function () {
      return `$ ${this.stockObj.price} per share`
    },
    stockQuantity: function () {
      return this.stockObj.quantity
    },
    stockImg: function () {
      return require('../../assets/' + this.stockObj.id + '.png')
    }
  }
}
</script>

<style>
</style>
