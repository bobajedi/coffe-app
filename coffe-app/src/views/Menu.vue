<script setup>
import { ref, computed } from 'vue'

const coffees = ref([
  { id: 1, name: 'Espresso', price: 80, image: '☕', desc: 'nice coffe.' },
  { id: 2, name: 'Latte', price: 115, image: '🥛', desc: 'nice coffe.' },
  { id: 3, name: 'Cappuccino', price: 105, image: '☁️', desc: 'nice coffe.' },
  { id: 4, name: 'Iced Americano', price: 95, image: '🧊', desc: 'nice coffe.' },
  { id: 5, name: 'Flat White', price: 120, image: '☕', desc: 'nice coffe.' },
  { id: 6, name: 'Mocha', price: 130, image: '🍫', desc: 'nice coffe.' },
  { id: 7, name: 'kafe turke', price: 75, image: '🏺', desc: 'nice coffe.' },
  { id: 8, name: 'Filter Coffee', price: 85, image: '⚗️', desc: 'nice coffe.' },
  { id: 9, name: 'Filter Coffee', price: 85, image: '⚗️', desc: 'nice coffe.' },
  { id: 10, name: 'Filter Coffee', price: 85, image: '⚗️', desc: 'nice coffe.' }
])

const cart = ref([])

const addToCart = (coffee) => {
  const item = cart.value.find(c => c.id === coffee.id)
  if (item) {
    item.quantity++
  } else {
    cart.value.push({ ...coffee, quantity: 1 })
  }
}

const removeFromCart = (index) => {
  cart.value.splice(index, 1)
}

const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})
</script>

<template>
  <main>
    <section class="menu">
      <h2 style="color: white;">Menuja</h2>
      <div class="grid">
        <div v-for="coffee in coffees" :key="coffee.id" class="card">
          <div class="icon">{{ coffee.image }}</div>
          <h3>{{ coffee.name }}</h3>
          <p>{{ coffee.desc }}</p>
          <div class="price">{{ coffee.price }} $</div>
          <button @click="addToCart(coffee)">Shto ne shporte</button>
        </div>
      </div>
    </section>

    <aside class="cart" v-if="cart.length > 0">
      <h2>Porosia</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <span>{{ item.name }} (x{{ item.quantity }})</span>
          <button @click="removeFromCart(index)" class="remove-btn">❌</button>
        </li>
      </ul>
      <hr>
      <div class="total">Gjithsej: <strong>{{ totalPrice }} $</strong></div>
      <button class="checkout-btn" @click="alert('Siparişiniz alındı!')">Perfundo porosine</button>
    </aside>
  </main>
</template>

<style scoped>
main { 
    display: flex;
    justify-content: center; 
    padding: 20px; 
}
.grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
}
.card { 
    background: #fff; 
    border: 1px solid #d7ccc8; 
    border-radius: 12px; padding: 30px; 
    text-align: center; transition: transform 0.2s; 
    width: 150px; 
    height: 220px; 
}
.card:hover { 
    transform: translateY(-5px);
 }
.icon { 
    font-size: 40px; 
    margin-bottom: 10px; 
}
button { 
    background: #6f4e37; 
    color: white; border: none; 
    padding: 10px 20px; 
    border-radius: 8px; 
    cursor: pointer; 
    margin-top: 10px;
 }
button:hover { 
    background: #4e342e;
 }
.cart { 
    background: #efebe9;
    padding: 20px;
    border-radius: 12px;
    min-width: 250px;
    height: fit-content;
    margin-left: 20px; 
}
.remove-btn { 
    background: none; 
    color: red; padding: 0; 
    margin-left: 10px; 
}
.checkout-btn { 
    width: 100%; 
    background: #2e7d32; 
    margin-top: 15px; 
}
.total { 
    font-size: 1.2rem; 
    margin-top: 10px; 
}
</style>