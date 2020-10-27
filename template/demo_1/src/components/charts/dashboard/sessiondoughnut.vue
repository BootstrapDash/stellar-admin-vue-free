<script>
import {
  Doughnut
} from 'vue-chartjs'

export default {
  name: 'sessiondoughnut',
  extends: Doughnut,
  data () {
    return {
      doughnutPieData: {
				datasets: [{
						data: [55,25,20],
						backgroundColor: [
								'#ffca00',
								'#38ce3c',
								'#ff4d6b'
						],
						borderColor: [
							'#ffca00',
							'#38ce3c',
							'#ff4d6b'
						],
				}],
				labels: [
					'Reassigned',
					'Not Assigned',
					'Assigned'
				]
      },
      doughnutPieOptions: {
        cutoutPercentage: 75,
				animationEasing: "easeOutBounce",
				animateRotate: true,
				animateScale: false,
				responsive: true,
				maintainAspectRatio: true,
				showScale: true,
				legend: {
						display: false
				},
				layout: {
						padding: {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
						}
				}
      }
    }
  },
  mounted () {
    this.renderChart(this.doughnutPieData, this.doughnutPieOptions)
  }
}
</script>
