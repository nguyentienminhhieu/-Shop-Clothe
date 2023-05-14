
// không cần xác thực authentication
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
})

export default ({ app }, inject) => {
  // Inject the axios instance into the context as $api
  inject('api', api)

}


// Khi cần xác thực authentication và k cần sử dụng nuxt/auth
// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'https://your-laravel-api-url.com'
// })

// export default ({ app, store }, inject) => {
//   // Set JWT token in the Authorization header
//   api.interceptors.request.use((config) => {
//     const token = store.state.auth.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   })

//   // Inject the axios instance into the context as $api
//   inject('api', api)
// }
