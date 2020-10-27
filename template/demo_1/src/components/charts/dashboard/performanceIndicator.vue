<template>
	<chartist
		ratio="ct-major-second"
		type="Bar"
		:data="stackedbarchartData"
		:options="stackedbarchartOptions" id="stackedBar">
</chartist>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-chartist'))

  export default {
    name: 'app',
    data () {
      return {
        stackedbarchartData: {
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					series: [
						[30, 25, 50, 25, 50, 25, 50, 55, 20, 35, 25, 30 ],
						[25, 50, 10, 35, 30, 15, 20, 20, 30, 25, 10, 15 ],
						[45, 25, 40, 40, 20, 60, 30, 25, 50, 40, 65, 55 ]
					],
        },
        stackedbarchartOptions: {
					stackBars: true,
					ticks: [25, 50, 75, 100],
					divisor: 4,
					height: 200,
					axisY: {
						onlyInteger: true,          
					},
					showGridBackground: false
				},
      }
    },
    mounted () {}
    
  }
</script>
<style>
  #stackedBar .ct-series-a .ct-bar,
  #stackedBar .ct-series-b .ct-bar,
  #stackedBar .ct-series-c .ct-bar,
  #stackedBar .ct-series-d .ct-bar {
      stroke-width: 8px;
	}
	.ct-chart .ct-series-a .ct-bar {
		stroke: #ff4d6b;
	}
	.ct-chart .ct-series-b .ct-bar {
		stroke: #8e32e9;
	}
  .ct-chart .ct-series-c .ct-bar {
		stroke: #1bdbe0;
	}
	#stackedBar {
		height: 200px;
	}
</style>
