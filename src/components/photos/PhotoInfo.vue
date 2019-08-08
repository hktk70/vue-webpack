<template>
    <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

   <div class="thumbs">
       <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    
    
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"
export default {
    data () {
        return {
            id: this.$route.params.id, // 从路由中获取到的 图片Id
            photoinfo: {}, // 图片详情
            list: []
    }
    },
    methods: {
         getPhotoInfo() {
      // 获取图片的详情
        this.$http.get("api/getimageInfo/" + this.id).then(result => {
            if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];
            }
        });
    },
        getThumbs(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
            
                if(result.body.status===0){
                    result.body.message.forEach(item => {
                        item.w=600;
                        item.h=400;
                        item.msrc=item.src;
                        console.log(item.src);
                    });
                    this.list=result.body.message;
                }
            })
        },
        handleClose () {  //加上这个方法
                console.log('close event')
            }
    },
    created () {
        this.getThumbs();
        this.getPhotoInfo();
    },
    components:{
        "cmt-box":comment
    }

}
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}

}
</style>
