import axios from 'axios';
import { _get, _post, _put, _patch, _delete } from './apiMethods'

export const API_INITIAL = process.env.REACT_APP_API_INITIAL

export const signUp = async (data) => {
    let url = API_INITIAL + '/user/register'
    return await _post(url, data)
}

export const signIn = async (data) => {
    let url = API_INITIAL + '/user/log-in'
    return await _post(url, data)
}

export const verifyOtp = async (data) => {
    let url = API_INITIAL + `/user/verify-user`
    return await _post(url, data)
}

export const resendOtp = async (data) => {
    let url = API_INITIAL + `/user/resend-otp`
    return await _post(url,data)
}

export const getProfile = async () => {
    let url = API_INITIAL + '/user/user-profile'
    return await _get(url)
}

export const forgetPassword = async (data) => {
    let url = API_INITIAL + '/user/forgot-password'
    return await _post(url, data)
}

export const updateProfile = async (data) => {
    let url = API_INITIAL + '/user/user-profile-update'
    return await _put(url,data)
}

export const changePassword = async (data) => {
    let url = API_INITIAL + `/user/change-password`
    return await _post(url, data)
}

export const resetPassword = async (data, id) => {
    let url = API_INITIAL + '/user/reset-password'
    return await _post(url, data)
}
