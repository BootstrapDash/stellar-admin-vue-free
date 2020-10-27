<template>
  <b-navbar id="template-header" class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="false">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center">
      <a class="navbar-brand brand-logo" href="index.html">
        <img src="@/assets/images/logo.svg" alt="logo" class="logo-dark" />
        <img src="@/assets/images/logo-light.svg" alt="logo-light" class="logo-light">
      </a>
      <a class="navbar-brand brand-logo-mini" href="index.html"><img src="@/assets/images/logo-mini.svg" alt="logo" /></a>
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize"  @click="toggleSidebar()">
        <span class="icon-menu"></span>
      </button>
    </div> 
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome stellar dashboard!</h5> 
      <ul class="navbar-nav navbar-nav-right">
        <form class="search-form d-none d-md-flex" action="#">
          <i class="icon-magnifier"></i>
          <input type="search" class="form-control" placeholder="Search Here" title="Search here">
        </form>
        <li class="nav-item d-none d-md-block"><a href="#" class="nav-link"><i class="icon-basket-loaded"></i></a></li>
        <li class="nav-item d-none d-md-block"><a href="#" class="nav-link"><i class="icon-chart"></i></a></li>
        <b-nav-item-dropdown right class="preview-list navbar-dropdown dotted-btn-transparent d-none d-md-flex">
          <template slot="button-content" class="p-0 m-0">
            <div class="nav-link count-indicator message-dropdown p-0 m-0">
              <i class="icon-speech"></i>
              <span class="count">7</span>
            </div>
          </template>
          <b-dropdown-item class="preview-item border-bottom">
            <a class="py-1 d-flex justify-content-between">
              <p class="mb-0 font-weight-medium mr-2">You have 7 unread mails </p>
              <span class="badge badge-pill badge-primary">View all</span>
            </a>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
           <a class="preview-item d-flex align-items-center">
              <div class="preview-thumbnail">
                <img src="@/assets/images/faces/face10.jpg" alt="image" class="img-sm profile-pic"> </div>
              <div class="preview-item-content flex-grow py-2">
                <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                <p class="font-weight-light small-text"> The meeting is cancelled </p>
              </div>
            </a>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <a class="preview-item d-flex align-items-center">
              <div class="preview-thumbnail">
                <img src="@/assets/images/faces/face12.jpg" alt="image" class="img-sm profile-pic"> </div>
              <div class="preview-item-content flex-grow py-2">
                <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                <p class="font-weight-light small-text"> The meeting is cancelled </p>
              </div>
            </a>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <a class="preview-item d-flex align-items-center">
              <div class="preview-thumbnail">
                <img src="@/assets/images/faces/face1.jpg" alt="image" class="img-sm profile-pic"> </div>
              <div class="preview-item-content flex-grow py-2">
                <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                <p class="font-weight-light small-text"> The meeting is cancelled </p>
              </div>
            </a>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list language-dropdown navbar-dropdown ml-2 d-none d-md-flex">
          <template slot="button-content" class="p-0 m-0">
            <div class="nav-link count-indicator message-dropdown p-0 m-0">
              <div class="d-inline-flex mr-3">
              <i class="flag-icon flag-icon-us"></i>
            </div>
            <span class="profile-text font-weight-normal">English</span> 
            </div>
          </template>
          <b-dropdown-item>
           <a class="preview-item d-flex align-items-center">
              <i class="flag-icon flag-icon-us"></i> English
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
               <i class="flag-icon flag-icon-fr"></i> French
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="flag-icon flag-icon-ae"></i> Arabic
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="flag-icon flag-icon-ru"></i> Russian
            </a>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list user-dropdown navbar-dropdown ml-3">
          <template slot="button-content" class="p-0 m-0">
            <div class="nav-link count-indicator message-dropdown p-0 m-0 ml-1">
              <img class="img-xs rounded-circle ml-2" src="@/assets/images/faces/face8.jpg" alt="Profile image"> <span class="font-weight-normal"> Henry Klein </span>
            </div>
          </template>
          <b-dropdown-item>
           <div class="dropdown-header text-center">
              <img class="img-md rounded-circle" src="@/assets/images/faces/face8.jpg" alt="Profile image">
              <p class="mb-1 mt-3">Henry Klein</p>
              <p class="font-weight-light text-muted mb-0">kleinhenry@gmail.com</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
               <i class="dropdown-item-icon icon-user text-primary"></i> My Profile <span class="badge badge-pill badge-danger">1</span>
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="dropdown-item-icon icon-speech text-primary"></i> Messages
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="dropdown-item-icon icon-energy text-primary"></i> Activity
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="dropdown-item-icon icon-question text-primary"></i> FAQ
            </a>
            </b-dropdown-item>
          <b-dropdown-item>
            <a class="preview-item d-flex align-items-center">
              <i class="dropdown-item-icon icon-power text-primary"></i>Sign Out
            </a>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" @click="toggleMobileSidebar()">
        <span class="icon-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    toggleSidebar: () => {
      document.querySelector('body').classList.toggle('sidebar-icon-only');
    },
    toggleMobileSidebar: () => {
      document.querySelector('#sidebar').classList.toggle('active');
    }
  }
}
</script>

<style scoped>
</style>