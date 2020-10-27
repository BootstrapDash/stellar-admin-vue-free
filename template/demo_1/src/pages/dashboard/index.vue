<template>
  <section class="dashboard">
    <div class="proBanner">
      <div>
        <span class="d-flex align-items-center purchase-popup">
          <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
          <a href="https://www.bootstrapdash.com/product/stellar-admin-pro-vue/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" class="btn btn-sm purchase-button ml-auto">Check Pro Version</a>
          <i class="mdi mdi-close bannerClose"  @click="toggleProBanner()" ></i>
        </span>
      </div>
    </div>
   <div class="row">
    <div class="col-md-8 grid-margin stretch-card">
      <div class="card">
        <div class="card-body performane-indicator-card">
          <div class="d-sm-flex">
            <h4 class="card-title flex-shrink-1">Performance Indicator</h4>
            <p class="m-sm-0 ml-sm-auto flex-shrink-0">
              <span class="data-time-range ml-0">7d</span>
              <span class="data-time-range active">2w</span>
              <span class="data-time-range">1m</span>
              <span class="data-time-range">3m</span>
              <span class="data-time-range">6m</span>
            </p>
          </div>
          <div class="d-sm-flex flex-wrap mt-3">
            <div class="d-flex align-items-center">
              <span class="dot-indicator bg-primary ml-2"></span>
              <p class="mb-0 ml-2 text-muted font-weight-semibold">Complaints (2098)</p>
            </div>
            <div class="d-flex align-items-center">
              <span class="dot-indicator bg-info ml-2"></span>
              <p class="mb-0 ml-2 text-muted font-weight-semibold"> Task Done (1123)</p>
            </div>
            <div class="d-flex align-items-center">
              <span class="dot-indicator bg-danger ml-2"></span>
              <p class="mb-0 ml-2 text-muted font-weight-semibold">Attends (876)</p>
            </div>
          </div>
          <div class="ct-chart mt-5">
            <performanceIndicator></performanceIndicator>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Sessions by channel</h4>
          <div class="aligner-wrapper py-3">
            <!-- <canvas id="sessionsDoughnutChart" height="210"></canvas> -->
            <sessiondoughnut :height="300"></sessiondoughnut>
            <div class="wrapper d-flex flex-column justify-content-center absolute absolute-center">
              <h2 class="text-center mb-0 font-weight-bold">8.234</h2>
              <small class="d-block text-center text-muted  font-weight-semibold mb-0">Total Leads</small>
            </div>
          </div>
          <div class="wrapper mt-4 d-flex flex-wrap align-items-cente">
            <div class="d-flex">
              <span class="square-indicator bg-danger ml-2"></span>
              <p class="mb-0 ml-2">Assigned</p>
            </div>
            <div class="d-flex">
              <span class="square-indicator bg-success ml-2"></span>
              <p class="mb-0 ml-2">Not Assigned</p>
            </div>
            <div class="d-flex">
              <span class="square-indicator bg-warning ml-2"></span>
              <p class="mb-0 ml-2">Re-assigned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Quick Action Toolbar Starts-->
  <div class="row quick-action-toolbar">
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header d-block d-md-flex">
          <h5 class="mb-0">Quick Actions</h5>
          <p class="ml-auto mb-0">How are your active users trending overtime?<i class="icon-bulb"></i></p>
        </div>
        <div class="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
          <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
            <button type="button" class="btn px-0"> <i class="icon-user mr-2"></i> Add Client</button>
          </div>
          <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
            <button type="button" class="btn px-0"><i class="icon-docs mr-2"></i> Create Quote</button>
          </div>
          <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
            <button type="button" class="btn px-0"><i class="icon-folder mr-2"></i> Enter Payment</button>
          </div>
          <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
            <button type="button" class="btn px-0"><i class="icon-book-open mr-2"></i>Create Invoice</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Quick Action Toolbar Ends-->
  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-sm-flex align-items-center mb-4">
            <h4 class="card-title mb-sm-0">Products Inventory</h4>
            <a href="#" class="text-dark ml-auto mb-3 mb-sm-0"> View all Products</a>
          </div>
          <div class="table-responsive border rounded p-1">
            <table class="table">
              <thead>
                <tr>
                  <th class="font-weight-bold">Store ID</th>
                  <th class="font-weight-bold">Amount</th>
                  <th class="font-weight-bold">Gateway</th>
                  <th class="font-weight-bold">Created at</th>
                  <th class="font-weight-bold">Paid at</th>
                  <th class="font-weight-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img class="img-sm rounded-circle" src="@/assets/images/faces/face1.jpg" alt="profile image"> Katie Holmes </td>
                  <td>$3621</td>
                  <td><img src="@/assets/images/dashboard/alipay.png" alt="alipay" class="gateway-icon mr-2"> alipay</td>
                  <td>04 Jun 2019</td>
                  <td>18 Jul 2019</td>
                  <td>
                    <div class="badge badge-success p-2">Paid</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img class="img-sm rounded-circle" src="@/assets/images/faces/face2.jpg" alt="profile image"> Minnie Copeland </td>
                  <td>$6245</td>
                  <td><img src="@/assets/images/dashboard/paypal.png" alt="alipay" class="gateway-icon mr-2"> Paypal</td>
                  <td>25 Sep 2019</td>
                  <td>07 Oct 2019</td>
                  <td>
                    <div class="badge badge-danger p-2">Pending</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img class="img-sm rounded-circle" src="@/assets/images/faces/face3.jpg" alt="profile image"> Rodney Sims </td>
                  <td>$9265</td>
                  <td><img src="@/assets/images/dashboard/alipay.png" alt="alipay" class="gateway-icon mr-2"> alipay</td>
                  <td>12 dec 2019</td>
                  <td>26 Aug 2019</td>
                  <td>
                    <div class="badge badge-warning p-2">Failed</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img class="img-sm rounded-circle" src="@/assets/images/faces/face4.jpg" alt="profile image"> Carolyn Barker </td>
                  <td>$2263</td>
                  <td><img src="@/assets/images/dashboard/alipay.png" alt="alipay" class="gateway-icon mr-2"> alipay</td>
                  <td>30 Sep 2019</td>
                  <td>20 Oct 2019</td>
                  <td>
                    <div class="badge badge-success p-2">Paid</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex mt-4 flex-wrap align-items-center">
            <p class="text-muted mb-sm-0">Showing 1 to 10 of 57 entries</p>
            <nav class="ml-auto">
              <ul class="pagination separated pagination-info mb-sm-0">
                <li class="page-item"><a href="#" class="page-link"><i class="icon-arrow-left"></i></a></li>
                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link">4</a></li>
                <li class="page-item"><a href="#" class="page-link"><i class="icon-arrow-right"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <div class="row income-expense-summary-chart-text">
            <div class="col-xl-4">
              <h5>Income And Expenses Summary</h5>
              <p class="small text-muted">A comparison of people who mark themselves of their ineterest from the date range given above. Learn more.</p>
            </div>
            <div class=" col-md-3 col-xl-2">
              <p class="income-expense-summary-chart-legend"> <span style="border-color: #6469df"></span> Total Income </p>
              <h3>$ 1,766.00</h3>
            </div>
            <div class="col-md-3 col-xl-2">
              <p class="income-expense-summary-chart-legend"> <span style="border-color: #37ca32"></span> Total Expense </p>
              <h3>$ 5,698.30</h3>
            </div>
            <div class="col-md-6 col-xl-4 d-flex align-items-center">
              <date-picker v-model="time1" valueType="format" placeholder="Select Date" :format="momentForamt"></date-picker>
            </div>
          </div>
          <div class="row income-expense-summary-chart mt-3">
            <div class="col-md-12">
              <incomeExpenceSummary></incomeExpenceSummary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card social-card card-colored twitter-card">
        <div class="card-body d-flex flex-wrap align-items-center justify-content-center">
          <i class="icon-social-twitter flex-shrink-0"></i>
          <div class="wrapper ml-3">
            <h5 class="mb-0">Twitter Followers</h5>
            <h1 class="mb-0">3200+</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card social-card card-colored facebook-card">
        <div class="card-body d-flex flex-wrap align-items-center justify-content-center">
          <i class="icon-social-facebook flex-shrink-0"></i>
          <div class="wrapper ml-3">
            <h5 class="mb-0">facebook likes</h5>
            <h1 class="mb-0">1500+</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card social-card card-colored instagram-card">
        <div class="card-body d-flex flex-wrap align-items-center justify-content-center">
          <i class="icon-social-instagram flex-shrink-0"></i>
          <div class="wrapper ml-3">
            <h5 class="mb-0">Instagram Posts</h5>
            <h1 class="mb-0">2320+</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="d-sm-flex align-items-baseline report-summary-header">
                <h5 class="font-weight-semibold">Report Summary</h5> <span class="ml-auto">Updated Report</span> <button class="btn btn-icons border-0 p-2"><i class="icon-refresh"></i></button>
              </div>
            </div>
          </div>
          <div class="row report-inner-cards-wrapper">
            <div class=" col-md -6 col-xl report-inner-card">
              <div class="inner-card-text">
                <span class="report-title">EXPENSE</span>
                <h4>$32123</h4>
                <span class="report-count"> 2 Reports</span>
              </div>
              <div class="inner-card-icon bg-success">
                <i class="icon-rocket"></i>
              </div>
            </div>
            <div class="col-md-6 col-xl report-inner-card">
              <div class="inner-card-text">
                <span class="report-title">PURCHASE</span>
                <h4>95,458</h4>
                <span class="report-count"> 3 Reports</span>
              </div>
              <div class="inner-card-icon bg-danger">
                <i class="icon-briefcase"></i>
              </div>
            </div>
            <div class="col-md-6 col-xl report-inner-card">
              <div class="inner-card-text">
                <span class="report-title">QUANTITY</span>
                <h4>2650</h4>
                <span class="report-count"> 5 Reports</span>
              </div>
              <div class="inner-card-icon bg-warning">
                <i class="icon-globe-alt"></i>
              </div>
            </div>
            <div class="col-md-6 col-xl report-inner-card">
              <div class="inner-card-text">
                <span class="report-title">RETURN</span>
                <h4>25,542</h4>
                <span class="report-count"> 9 Reports</span>
              </div>
              <div class="inner-card-icon bg-primary">
                <i class="icon-diamond"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-xl-4 grid-margin stretch-card">
      <div class="card sessions-progress-bar-card">
        <div class="card-header">
          <h4>Sessions by Countries</h4>
        </div>
        <div class="card-body">
          <ul class="dashboard-progress-bar-wrapper m-0">
            <li>
              <div class="d-flex justify-content-between">
                <h6>1. Netherlands</h6>
                <p class="font-weight-semibold">$380.50 <span class="text-muted font-weight-normal">(1.51%)</span></p>
              </div>
              <div class="progress progress-md">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <h6>2. United States</h6>
                <p class="font-weight-semibold">$503.20 <span class="text-muted font-weight-normal">(13.45%)</span></p>
              </div>
              <div class="progress progress-md">
                <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <h6>3. United kingdom</h6>
                <p class="font-weight-semibold">$421.80 <span class="text-muted font-weight-normal">(1.51%)</span></p>
              </div>
              <div class="progress progress-md">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <h6>4. Canada</h6>
                <p class="font-weight-semibold">$850.30 <span class="text-muted font-weight-normal">(1.51%)</span></p>
              </div>
              <div class="progress progress-md">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 55%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <h6>5. Australia</h6>
                <p class="font-weight-semibold">$380.50 <span class="text-muted font-weight-normal">(1.51%)</span></p>
              </div>
              <div class="progress progress-md">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-4 grid-margin stretch-card">
      <div class="card dashboard-inline-datepicker datepicker-custom">
        <div class="card-body">
          <date-picker v-model="time2" valueType="format" inline></date-picker>
        </div>
      </div>
    </div>
    <div class="col-xl-4 grid-margin stretch-card">
      <div class="card quick-status-card">
        <div class="card-body">
          <h4 class="card-title">Quick Status</h4>
          <div class="row">
            <div class="col-md-6">
              <radial-progress-bar class="ml-auto mr-auto" :diameter="125"
                :completed-steps="70"
                :total-steps="100"
                innerStrokeColor="#eee"
                startColor = "#1bdbe0"
                stopColor="#1bdbe0"
                :strokeWidth="10"
                >
                <p class="circle-progress-value">74</p>
                <p class="circle-progress-label">Expense</p>
              </radial-progress-bar>
            </div>
            <div class="col-md-6">
              <radial-progress-bar class="ml-auto mr-auto" :diameter="125"
                :completed-steps="70"
                :total-steps="100"
                innerStrokeColor="#eee"
                startColor = "#8e32e9"
                stopColor="#8e32e9"
                :strokeWidth="10"
                >
                <p class="circle-progress-value">56</p>
                <p class="circle-progress-label">Income</p>
              </radial-progress-bar>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <div class="wrapper py-4 d-flex border-bottom">
                <span class="icon-holder">
                  <i class="icon-wallet"></i>
                </span>
                <div class="ml-3">
                  <p class="mb-1">My Balance</p>
                  <h6 class="mb-0">$5021.00</h6>
                </div>
                <div class="ml-auto"><i class="icon-arrow-down-circle"></i><span class="text-muted ml-2">2.87 %</span></div>
              </div>
              <div class="wrapper py-4 d-flex">
                <span class="icon-holder">
                  <i class="icon-basket-loaded"></i>
                </span>
                <div class="ml-3">
                  <p class="mb-1">Sales Revenue</p>
                  <h6 class="mb-0">24,301.00</h6>
                </div>
                <div class="ml-auto"><i class="icon-arrow-down-circle"></i><span class="text-muted ml-2">2.87 %</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

import RadialProgressBar from 'vue-radial-progress'
import performanceIndicator from '../../components/charts/dashboard/performanceIndicator'
import sessiondoughnut from '../../components/charts/dashboard/sessiondoughnut'
import incomeExpenceSummary from '../../components/charts/dashboard/incomeExpenceSummary'
import DatePicker from 'vue2-datepicker';



export default {
  name: 'dashboard',
  components: {
     performanceIndicator,
     sessiondoughnut,
     incomeExpenceSummary,
     DatePicker,
     RadialProgressBar
  },
  data() {
    return {
      time1: null,
      time2: null
    };
  },
  methods: {
    toggleProBanner: () => {
      document.querySelector('body').classList.toggle('pro-banner-collapse');
    }
  }
}
</script>

<style>
  @media (max-width: 767px) {
    .performane-indicator-card .ct-chart-bar .ct-label.ct-horizontal.ct-end {
      transform: rotate(-90deg)
    }
  }
</style>