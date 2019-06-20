// //对AJAX进行封装
// import axios from 'axios';
// axios.defaults.baseURL = 'http://192.168.31.58:8081';
// export function getLogin({ commit }, option) {

//     axios.get('/weixin/auth/login').then((data) => {
//         option(data.data)
//     })
// }

// // 请求热门图书数据
// export function getHotbook({ commit }, option) {
//     // http://163.com/hobook
//     axios.get('/hotbook').then((data) => {
//         option && option(data.data)
//     })
// }

// // 请求列表数据
// export function getListData({ commit }, option) {
//     axios.get('/listdata').then((data) => {
//         // option && option(data.data)
//         // 请求成功之后  把data.data 赋给 state中的list
//         commit('addList', data.data);
//     })
// }