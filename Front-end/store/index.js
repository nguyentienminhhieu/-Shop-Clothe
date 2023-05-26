import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
import shoes from './shoes';
import bags from './bags';
import shirts from './shirts';
import trousers from './trousers';
import users from './users';
import cart from './cart'

Vue.use(Vuex);

export default function createStore() {
    return new Vuex.Store({
      modules: {
        products,
        shoes,
        bags,
        shirts,
        trousers,
        users,
        cart,
      },
    });
  }