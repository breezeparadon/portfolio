// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'https://randomuser.me',
  })

  nuxtApp.provide('axios', instance)
})