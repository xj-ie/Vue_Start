<template>
    <!-- 指定html显示内容 -->
    <div>
    	单文件组件
    	<Chid></Chid>
    	<Chid2></Chid2>
    </div>
</template>


<script>
import Child from './components/Child.vue'
import Child2 from './components/Child2.vue'
    // 指定js内容
export default {
		data: function(){
				return {name:python}
		},
		components:{
				Child,
				Child2
		}
}

</script>

<style>
/* 指定css内容 */
</style>
