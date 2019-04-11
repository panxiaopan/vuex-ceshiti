import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [
         
    ],
    average:0,//平均数
  },
  mutations: {
    changeDataList(state,data){
      state.dataList = state.dataList.concat(data)
    },
    chageave(state){//改变平均值
      let ret=0; 
      let data = state.dataList
      for(var i=0; i<data.length;i++){
        ret=ret+Number(data[i].data);
      }
      let aver=ret /data.length;
      state.average=aver.toFixed(2)//保留两位
     
    }
  },
  getters: {
    getAverage: state => state.average,
    getData: state => state.dataList
  },
  actions: {
    getDataCall ({commit},data) {

       commit('changeDataList',data)
       commit('chageave')
    },
  

  }
})
