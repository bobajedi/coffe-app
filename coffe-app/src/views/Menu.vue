<script setup>
import { ref, computed } from 'vue'

const coffees = ref([
  { id: 1, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 2, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 3, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 4, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 5, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 6, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 7, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 8, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 9, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 10, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 11, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 12, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 13, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 14, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 15, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 16, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 17, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 18, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 19, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 20, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 21, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 22, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 23, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 24, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 25, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 26, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 27, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
  { id: 28, name: 'Espresso', price: 1.50, image: '☕', desc: 'nice coffe.' },
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
   <link rel="icon" type="image/png+jpg" href="/coffe-app/public/coffe.jpg" />
  <main>
    <div class="home-page1">
    <section class="menu">
      <h2 style="color: white; font-size: 35px; font-style: italic; font-weight:100;">Menuja</h2>
      <div class="grid">
        <div v-for="coffee in coffees" :key="coffee.id" class="card">
          <div class="icon">{{ coffee.image }}</div>
          <h3>{{ coffee.name }}</h3>
          <p>{{ coffee.desc }}</p>
          <div class="price">{{ coffee.price }} €</div>
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
      </div>
  </main>
</template>

<style scoped>
main { 
    display: flex;
    justify-content: center; 
    padding: 0px; 
    background-image: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
    min-height: 100vh;   
    backdrop-filter: blur(15px); 
    -webkit-backdrop-filter: blur(15px);
}

.home-page1 {
  background: rgba(0, 0, 0, 0.6); 
  backdrop-filter: blur(15px); 
  -webkit-backdrop-filter: blur(15px);
  margin: 0;
  color: white;
  padding: 60px;
}
.grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
}
.card { 
    background: rgba(116, 114, 114, 0.6); 
    backdrop-filter: blur(1px); 
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid #555453; 
    box-shadow: rgba(128, 128, 128, 0.35) 0px 5px 15px;
    border-radius: 12px; padding: 30px; 
    text-align: center; transition: transform 0.2s; 
    width: 150px; 
    height: 220px; 
    color: rgb(255, 255, 255);
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
    background: #514f4f;
    padding: 20px;
    border-radius: 12px;
    min-width: 250px;
    height: fit-content;
    margin-left: 20px; 
    color: rgb(255, 255, 255);
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