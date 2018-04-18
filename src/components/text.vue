<template>
    <div class="page">
        测试页
        <li v-for="(value,key,index) in items">
            {{index}}-{{key}}-{{value}}
        </li>
    </div>
</template>
<script>
export default {
    name: 'page',
    data(){
        return {
          parentMsg:'Parent',
          items:{
              message: 'Foo',
              name: 'Bar'
          }
        }
    },
    watch:{
        
    },
    computed:{
        
    }
    
    
}
</script>
<style scoped>
.page{
    font-size: 0.3rem;
}
.active{
  color: red
}
.text-danger{
  font-size: 0.1rem
}
</style>

