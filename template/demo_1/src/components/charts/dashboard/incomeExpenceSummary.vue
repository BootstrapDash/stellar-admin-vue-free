<template>
	<chartist
		ratio="ct-major-second"
		type="Line"
		:data="incomExpenceData"
		:options="incomExpenceOptions" id="incomeExpenceChart">
</chartist>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-chartist'))

  export default {
    name: 'app',
    data () {
      return {
        incomExpenceData: {
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					series: [
						[505, 781, 480, 985, 410, 822, 388, 874, 350, 642, 320, 796],
            [700, 430, 725, 390, 686, 392, 757, 500, 820, 400, 962, 420]
					],
        },
        incomExpenceOptions: {
					ticks: [250, 500, 750, 1000],
					divisor: 4,
					height: 300,
					onlyInteger: true,  
          showArea: true,
          showPoint: false,
          fullWidth: true,
					showGridBackground: true
				},
      }
    },
    mounted () {}
    
  }
</script>
<style>
</style>
