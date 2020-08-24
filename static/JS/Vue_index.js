//局部组件定义
let zujian_a = {
	template:'<div @click=isupload>局部组件定义{{pro}}</div>',
	data:()=>{
		return {age:19}
	},
	props:['pro'],
	methods:{
				// upload:()=>{
				// 	this.$emit("listen",this.age)
				// },
				isupload:function(){
                    this.$emit('isListen', this.age) // 子元素上的点击事件成功后，通过 $emit 将事件和数据传递给父组件
                }
	},

};
// 全局组定义
Vue.component(
	"component_all",
	// 全局组件名称
	{
		template:'<div v-on:isListen="isShow">全局组定义 <zujian_a :pro="epwq"></zujian_a>{{epwq}}</div>',
		components:{
			zujian_a
		},
		// 组件绑定数据 
		data:()=>{
			return {epwq:'g an g an'}
		},
		methods:{
			isShow:function(data){
                    alert(data)}

		}
	}
	)
let binge = new Vue({
						el: '#app',
						data: { 'epwq':'q ep wq'

						},
						methods: {
							lls:()=>{
								alert(this.epwq)
							}
						},
						delimiters: ['[[',']]'],

        
					})