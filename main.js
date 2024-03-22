import Vue from "vue"
import App from "./App"
import cooluni from 'cl-uni-2'

Vue.config.productionTip = false

App.mpType = "app"

Vue.use(cooluni)

const app = new Vue({
	...App,
})
app.$mount()
