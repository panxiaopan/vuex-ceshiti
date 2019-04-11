<template>
  <div class="test">
    <div>
      平均值: {{getAverage}}
    </div>
    <button @click="update">加载更多</button>

    <div class="list" v-for="(item, index) in dataList" :key="index" style="margin:0 auto" >
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{timeFormattershowsecod(item.time)}}</div>
    </div>
  </div>
</template>

<script>
import{timeFormattershowsecod} from '@/components/common'
import {mapGetters,mapActions} from 'vuex';
import getMock from '@/mock'

export default {
 computed:{
  ...mapGetters(['getData','getAverage'])
 },
  name: 'test',
  data () {
    return {
      dataList: [],
      average: '',
      page:1,
      currentnumber:20,//数据 
      timeFormattershowsecod,
    }
  },
watch:{
    getData(){
        this.dataList=this.getData
    }
     
},
  methods: {
    ...mapActions(['getDataCall']),
    update(){//点击加载
        this.page++
         this.datalist()               
    },
    datalist(){//数据列表

       getMock(this.page,this.currentnumber).then(res =>{
       this.getDataCall(res) //传值多store
       console.log(this.getData)

         })
        
    }
  

  },
  mounted() {
    this.datalist()

  }

}
</script>

<style scoped lang="less">

.test{

  .list{
    // display: flex;
    flex-direction: row;
    div {
      width: 200px;
      display: inline-block;
      height: 30px;
    }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
