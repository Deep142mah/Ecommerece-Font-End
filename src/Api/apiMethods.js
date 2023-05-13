import axiosCall from '../axios'


export const _get = (url, params = {}) => axiosCall.get(url, params)

export const _post = (url, data = {}, token = '') => axiosCall.post(url, data, token)
export const _put = (url, data = {}) => axiosCall.put(url, data)
export const _patch = (url, data = {}) => axiosCall.patch(url, data)
export const _delete = (url, data = {}) => axiosCall.delete(url, data)