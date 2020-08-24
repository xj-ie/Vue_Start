//局部组件定义
let zujian_a = {
	template:'<div>局部组件定义{{age}}</div>',
	data:()=>{
		return {age:19}
	}
};
// 全局组定义
Vue.component(
	"component_all",
	// 全局组件名称
	{
		template:'<div>全局组定义 <zujian_a></zujian_a>{{epwq}}</div>',
		components:{
			zujian_a
		},
		// 组件绑定数据 
		data:()=>{
			return {epwq:'g an g an'}
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