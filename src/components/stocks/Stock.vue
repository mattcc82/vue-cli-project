<template>
  <b-col sm="6" md="4">
    <b-card deck
            border-variant="info"
            :img-alt="stockObj.name"
            img-fluid
            :header="stockObj.name"
            :footer="stockPrice"
            footer-bg-variant="info"
            footer-text-variant="white"
            class="text-center">
        <p class="card-text">
          <b-input-group prepend="Quantity">
            <b-form-input
              v-model="quantity"
              type="number"
              min="0"
              placeholder=""></b-form-input>
            <b-btn
              :disabled="quantity <= 0 || Number.isInteger(quantity)"
              variant="outline-success"
              @click="buyStock">Buy</b-btn>
          </b-input-group>
        </p>
    </b-card>
  </b-col>
</template>

<script>
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
    buyStock () {
      const order = {
        stockId: this.stockObj.id,
        stockPrice: this.stockObj.price,
        stockQty: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  },
  computed: {
    stockPrice: function () {
      return `$ ${this.stockObj.price} per share`
    },
    stockImg: function () {
      return require('../../assets/' + this.stockObj.id + '.png')
    }
  }
}
</script>

<style scoped>

</style>
