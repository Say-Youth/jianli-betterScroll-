import Vue from 'vue'
import Vuex from 'vuex'

// 组件化开发时的VUEX 导入公共data
import state from "./state"
//导入同步公共方法
import * as mutations from './mutations'//会将若干export导出的内容组合成一个对象返回；
//导入异步公共方法
import * as actions from "./actions"//一般进行AJAX处理

Vue.use(Vuex)

export default new Vuex.Store({//export default new Vuex.Store默认导出Vuex.Store
    state,
    mutations,
    actions
})