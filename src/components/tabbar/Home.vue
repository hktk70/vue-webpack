<template>
<div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>



</div>


</template>
<script>
import { Toast } from "mint-ui";
export default {
    data () {
        return {
            lunbotuList:[]
        }
    },
    methods:{
        getLunbotu(){
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
                if(result.body.state==0){
                    this.lunbotuList=result.body.message;
                }else{
                      Toast("加载轮播图失败。。。");
                }
            })

            }
        }
    }


</script>
<style lang="sass" scoped>

</style>
