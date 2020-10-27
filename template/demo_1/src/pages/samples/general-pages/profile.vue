<template>
  <section class="profile">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="border-bottom text-center pb-4">
                  <img src="../../../assets/images/faces/face12.jpg" alt="profile" class="img-lg rounded-circle mb-3"/>
                  <p>Bureau Oberhaeuser is a design bureau focused on Information- and Interface Design. </p>
                  <div class="d-block d-sm-flex justify-content-between">
                    <b-button variant="success">Hire Me</b-button>
                    <b-button variant="success">Follow</b-button>
                  </div>
                </div>
                <div class="border-bottom py-4">
                  <p>Skills</p>
                  <div>
                    <label class="badge badge-outline-dark">Chalk</label>
                    <label class="badge badge-outline-dark">Hand lettering</label>
                    <label class="badge badge-outline-dark">Information Design</label>
                    <label class="badge badge-outline-dark">Graphic Design</label>
                    <label class="badge badge-outline-dark">Web Design</label>
                  </div>
                </div>
                <div class="border-bottom py-4">
                  <div class="d-flex mb-3">
                    <div class="progress progress-md flex-grow">
                      <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="55" style="width: 55%" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="progress progress-md flex-grow">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" style="width: 75%" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <p class="clearfix">
                    <span class="float-left">
                      Status
                    </span>
                    <span class="float-right text-muted">
                      Active
                    </span>
                  </p>
                  <p class="clearfix">
                    <span class="float-left">
                      Phone
                    </span>
                    <span class="float-right text-muted">
                      006 3435 22
                    </span>
                  </p>
                  <p class="clearfix">
                    <span class="float-left">
                      Mail
                    </span>
                    <span class="float-right text-muted">
                      Jacod@testmail.com
                    </span>
                  </p>
                  <p class="clearfix">
                    <span class="float-left">
                      Facebook
                    </span>
                    <span class="float-right text-muted">
                      <a href="javascript:void(0);">David Grey</a>
                    </span>
                  </p>
                  <p class="clearfix">
                    <span class="float-left">
                      Twitter
                    </span>
                    <span class="float-right text-muted">
                      <a href="javascript:void(0);">@davidgrey</a>
                    </span>
                  </p>
                </div>
                <b-button variant="primary btn-block">Preview</b-button>
              </div>
              <div class="col-lg-8">
                <div class="d-lg-flex justify-content-between">
                  <div>
                    <h3 class="mt-3 mt-lg-0">David Grey. H</h3>
                    <div class="d-flex align-items-center">
                      <h5 class="mb-0 mr-2 text-muted mt-3 mt-lg-0">Canada</h5>
                      <star-rating class="ml-3" v-bind:increment="0.5" v-bind:rating="3.5" v-bind:max-rating="5" v-bind:star-size="20" v-bind:show-rating="false" v-bind:read-only="true" :active-color="'#b66dff'"></star-rating>
                    </div>
                  </div>
                  <div class="mt-3 mt-lg-0">
                    <b-button variant="outline-secondary btn-icon">
                      <i class="icon-docs"></i>
                    </b-button>
                    <b-button variant="primary">Request</b-button>
                  </div>
                </div>
                <div class="mt-4 py-2 border-top border-bottom">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0);">
                        <i class="icon-user"></i>
                        Info
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="javascript:void(0);">
                        <i class="icon-paper-plane"></i>
                        Feed
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0);">
                        <i class="icon-calendar"></i>
                        Agenda
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0);">
                        <i class="icon-paper-clip"></i>
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="profile-feed">
                  <div class="d-flex align-items-start profile-feed-item">
                    <img src="../../../assets/images/faces/face13.jpg" alt="profile" class="img-sm rounded-circle"/>
                    <div class="ml-4">
                      <h6>
                        Mason Beck
                        <small class="ml-4 text-muted"><i class="icon-clock mr-1"></i>10 hours</small>
                      </h6>
                      <p>
                        There is no better advertisement campaign that is low cost and also successful at the same time.
                      </p>
                      <p class="small text-muted mt-2 mb-0">
                        <span>
                          <i class="icon-star mr-1"></i>4
                        </span>
                        <span class="ml-2">
                          <i class="icon-envelope-letter mr-1"></i>11
                        </span>
                        <span class="ml-2">
                          <i class="icon-action-redo"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-start profile-feed-item">
                    <img src="../../../assets/images/faces/face16.jpg" alt="profile" class="img-sm rounded-circle"/>
                    <div class="ml-4">
                      <h6>
                        Willie Stanley
                        <small class="ml-4 text-muted"><i class="icon-clock mr-1"></i>10 hours</small>
                      </h6>
                      <img src="../../../assets/images/samples/1280x768/12.jpg" alt="sample" class="rounded mw-100"/>
                      <p class="small text-muted mt-2 mb-0">
                        <span>
                          <i class="icon-star mr-1"></i>4
                        </span>
                        <span class="ml-2">
                          <i class="icon-envelope-letter mr-1"></i>11
                        </span>
                        <span class="ml-2">
                          <i class="icon-action-redo"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-start profile-feed-item">
                    <img src="../../../assets/images/faces/face19.jpg" alt="profile" class="img-sm rounded-circle"/>
                    <div class="ml-4">
                      <h6>
                        Dylan Silva
                        <small class="ml-4 text-muted"><i class="icon-clock mr-1"></i>10 hours</small>
                      </h6>
                      <p>
                        When I first got into the online advertising business, I was looking for the magical combination
                        that would put my website into the top search engine rankings
                      </p>
                      <img src="../../../assets/images/samples/1280x768/5.jpg" alt="sample" class="rounded mw-100"/>
                      <p class="small text-muted mt-2 mb-0">
                        <span>
                          <i class="icon-star mr-1"></i>4
                        </span>
                        <span class="ml-2">
                          <i class="icon-envelope-letter mr-1"></i>11
                        </span>
                        <span class="ml-2">
                          <i class="icon-action-redo"></i>
                        </span>
                      </p>
                    </div>
                  </div>
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
import StarRating from 'vue-star-rating'
export default {
  name: 'profile',
  components: {
    StarRating
  }
}
</script>