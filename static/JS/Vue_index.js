// 全局组定义
Vue.component(
	"component_all",
	// 全局组件名称
	{
		template:'<div>全局组定义</div>'
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