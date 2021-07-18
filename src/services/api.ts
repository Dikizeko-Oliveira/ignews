import aixos from 'axios';

export const api = aixos.create({
  baseURL: '/api'
})