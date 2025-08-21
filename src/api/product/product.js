import service from '@/utils/axios.js'

export const getCategories = () =>
    service.get('/categories')

export const getProducts = (params) =>
    service.get('/products', { params })