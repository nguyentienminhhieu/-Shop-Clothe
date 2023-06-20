import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
import users from './users';
import cart from './cart'
import login from './login'
import alert from './alert'

Vue.use(Vuex);

export default function createStore() {
    return new Vuex.Store({
      modules: {
        products,
        users,
        cart,
        login,
        alert,
      },
    });
  }
