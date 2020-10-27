<template>

  <section class="buttons">
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rounded buttons</h4>
            <p class="card-description">Add class <code>.btn-rounded</code></p>
            <div class="template-demo">
              <b-button variant="primary" class="btn-rounded btn-fw">Primary</b-button>
              <b-button variant="secondary" class="btn-rounded btn-fw">Secondary</b-button>
              <b-button variant="success" class="btn-rounded btn-fw">Success</b-button>
              <b-button variant="danger" class="btn-rounded btn-fw">Danger</b-button>
              <b-button variant="warning" class="btn-rounded btn-fw">Warning</b-button>
              <b-button variant="info" class="btn-rounded btn-fw">Info</b-button>
              <b-button variant="light" class="btn-rounded btn-fw">Light</b-button>
              <b-button variant="dark" class="btn-rounded btn-fw">Dark</b-button>
              <b-button variant="link" class="btn-rounded btn-fw">Link</b-button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Outlined buttons</h4>
            <p class="card-description">Add class <code>.btn-outline-{color}</code> for outline buttons</p>
            <div class="template-demo">
              <button type="button" class="btn btn-outline-primary btn-fw">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-fw">Secondary</button>
              <button type="button" class="btn btn-outline-success btn-fw">Success</button>
              <button type="button" class="btn btn-outline-danger btn-fw">Danger</button>
              <button type="button" class="btn btn-outline-warning btn-fw">Warning</button>
              <button type="button" class="btn btn-outline-info btn-fw">Info</button>
              <button type="button" class="btn btn-outline-light btn-fw">Light</button>
              <button type="button" class="btn btn-outline-dark btn-fw">Dark</button>
              <button type="button" class="btn btn-link btn-fw">Link</button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Single color buttons</h4>
            <p class="card-description">Add class <code>.btn-{color}</code> for buttons in theme colors</p>
            <div class="template-demo">
              <b-button variant="primary" class="btn btn-fw">Primary</b-button>
              <b-button variant="secondary" class="btn btn-fw">Secondary</b-button>
              <b-button variant="success" class="btn btn-fw">Success</b-button>
              <b-button variant="danger" class="btn btn-fw">Danger</b-button>
              <b-button variant="warning" class="btn btn-fw">Warning</b-button>
              <b-button variant="info" class="btn btn-fw">Info</b-button>
              <b-button variant="light" class="btn btn-fw">Light</b-button>
              <b-button variant="dark" class="btn btn-fw">Dark</b-button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Inverse buttons</h4>
            <p class="card-description">Add class <code>.btn-inverse-{color} for inverse buttons</code></p>
            <div class="template-demo">
              <button type="button" class="btn btn-inverse-primary btn-fw">Primary</button>
              <button type="button" class="btn btn-inverse-secondary btn-fw">Secondary</button>
              <button type="button" class="btn btn-inverse-success btn-fw">Success</button>
              <button type="button" class="btn btn-inverse-danger btn-fw">Danger</button>
              <button type="button" class="btn btn-inverse-warning btn-fw">Warning</button>
              <button type="button" class="btn btn-inverse-info btn-fw">Info</button>
              <button type="button" class="btn btn-inverse-light btn-fw">Light</button>
              <button type="button" class="btn btn-inverse-dark btn-fw">Dark</button>
              <button type="button" class="btn btn-link btn-fw">Link</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-7">
                <h4 class="card-title">Icon Buttons</h4>
                <p class="card-description">Add class <code>.btn-icon</code> for buttons with only icons</p>
                <div class="template-demo d-flex justify-content-between flex-nowrap">
                  <b-button class="btn btn-primary btn-rounded btn-icon">
                    <i class="icon-home"></i>
                  </b-button>
                  <b-button class="btn btn-dark btn-rounded btn-icon">
                    <i class="icon-globe"></i>
                  </b-button>
                  <b-button class="btn btn-danger btn-rounded btn-icon">
                    <i class="icon-envelope-open"></i>
                  </b-button>
                  <b-button class="btn btn-info btn-rounded btn-icon">
                    <i class="icon-star"></i>
                  </b-button>
                  <b-button class="btn btn-success btn-rounded btn-icon">
                    <i class="icon-location-pin"></i>
                  </b-button>
                </div>
                <div class="template-demo d-flex justify-content-between flex-nowrap">
                  <button type="button" class="btn btn-inverse-primary btn-rounded btn-icon">
                    <i class="icon-home"></i>
                  </button>
                  <button type="button" class="btn btn-inverse-dark btn-icon">
                    <i class="icon-globe"></i>
                  </button>
                  <button type="button" class="btn btn-inverse-danger btn-icon">
                    <i class="icon-envelope-open"></i>
                  </button>
                  <button type="button" class="btn btn-inverse-info btn-icon">
                    <i class="icon-star"></i>
                  </button>
                  <button type="button" class="btn btn-inverse-success btn-icon">
                    <i class="icon-location-pin"></i>
                  </button>
                </div>
                <div class="template-demo d-flex justify-content-between flex-nowrap mt-4">
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-heart text-danger"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-music-tone-alt text-dark"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-star text-primary"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-graph text-success"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-speedometer text-info"></i>
                  </button>
                </div>
                <div class="template-demo d-flex justify-content-between flex-nowrap">
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-heart"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-music-tone-alt"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-star"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-speedometer"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                    <i class="icon-graph"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-5">
                <h4 class="card-title">Button Size</h4>
                <p class="card-description">Use class <code>.btn-{size}</code></p>
                <div class="template-demo">
                  <button type="button" class="btn btn-outline-secondary btn-lg">btn-lg</button>
                  <button type="button" class="btn btn-outline-secondary btn-md">btn-md</button>
                  <button type="button" class="btn btn-outline-secondary btn-sm">btn-sm</button>
                </div>
                <div class="template-demo mt-4">
                  <button type="button" class="btn btn-danger btn-lg">btn-lg</button>
                  <button type="button" class="btn btn-success btn-md">btn-md</button>
                  <button type="button" class="btn btn-primary btn-sm">btn-sm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Block buttons</h4>
            <p class="card-description">Add class <code>.btn-block</code></p>
            <div class="template-demo">
              <button type="button" class="btn btn-info btn-lg btn-block">Block buttons <i class="icon-menu float-right"></i>
              </button>
              <button type="button" class="btn btn-dark btn-lg btn-block">Block buttons</button>
              <button type="button" class="btn btn-primary btn-lg btn-block">
                <i class="icon-user"></i> Block buttons </button>
              <button type="button" class="btn btn-outline-secondary btn-lg btn-block">Block buttons</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h4 class="card-title">Button groups</h4>
                <p class="card-description">Wrap a series of buttons with <code>.btn</code>
                  in <code>.btn-group</code></p>
                <div class="template-demo">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">1</button>
                    <button type="button" class="btn btn-outline-secondary">2</button>
                    <button type="button" class="btn btn-outline-secondary">3</button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-heart"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-calendar"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-clock"></i>
                    </button>
                  </div>
                </div>
                <div class="template-demo">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">1</button>
                    <button type="button" class="btn btn-primary">2</button>
                    <button type="button" class="btn btn-primary">3</button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">
                      <i class="icon-heart"></i>
                    </button>
                    <button type="button" class="btn btn-primary">
                      <i class="icon-calendar"></i>
                    </button>
                    <button type="button" class="btn btn-primary">
                      <i class="icon-clock"></i>
                    </button>
                  </div>
                </div>
                <div class="template-demo mt-4">
                  <div class="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-arrow-up"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-menu"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-arrow-down"></i>
                    </button>
                  </div>
                  <div class="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">Default</button>
                    <div class="btn-group">
                      <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">Dropdown</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item">Go back</a>
                        <a class="dropdown-item">Delete</a>
                        <a class="dropdown-item">Swap</a>
                      </div>
                    </div>
                    <button type="button" class="btn btn-outline-secondary">Default</button>
                  </div>
                  <div class="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">Top</button>
                    <button type="button" class="btn btn-outline-secondary">Middle</button>
                    <button type="button" class="btn btn-outline-secondary">Bottom</button>
                  </div>
                </div>
                <div class="template-demo mt-4">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-star d-block mb-1"></i> Favourites </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-reload d-block mb-1"></i> Reload </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="icon-user d-block mb-1"></i> Users </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="card-title">Button with text and icon</h4>
                <p class="card-description">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> or <code>.btn-icon-append</code> for icon tags</p>
                <div class="template-demo">
                  <button type="button" class="btn btn-primary btn-icon-text">
                    <i class="icon-doc btn-icon-prepend"></i> Submit </button>
                  <button type="button" class="btn btn-dark btn-icon-text"> Edit <i class="icon-doc btn-icon-append"></i>
                  </button>
                  <button type="button" class="btn btn-success btn-icon-text">
                    <i class="icon-info btn-icon-prepend"></i> Warning </button>
                </div>
                <div class="template-demo">
                  <button type="button" class="btn btn-danger btn-icon-text">
                    <i class="icon-cloud-upload btn-icon-prepend"></i> Upload </button>
                  <button type="button" class="btn btn-info btn-icon-text"> Print <i class="icon-printer btn-icon-append"></i>
                  </button>
                  <button type="button" class="btn btn-warning btn-icon-text">
                    <i class="icon-reload btn-icon-prepend"></i> Reset </button>
                </div>
                <div class="template-demo mt-2">
                  <button type="button" class="btn btn-outline-primary btn-icon-text">
                    <i class="icon-doc btn-icon-prepend"></i> Submit </button>
                  <button type="button" class="btn btn-outline-secondary btn-icon-text"> Edit <i class="icon-doc btn-icon-append"></i>
                  </button>
                  <button type="button" class="btn btn-outline-success btn-icon-text">
                    <i class="icon-info btn-icon-prepend"></i> Warning </button>
                </div>
                <div class="template-demo">
                  <button type="button" class="btn btn-outline-danger btn-icon-text">
                    <i class="icon-cloud-upload btn-icon-prepend"></i> Upload </button>
                  <button type="button" class="btn btn-outline-info btn-icon-text"> Print <i class="icon-printer btn-icon-append"></i>
                  </button>
                  <button type="button" class="btn btn-outline-warning btn-icon-text">
                    <i class="icon-reload btn-icon-prepend"></i> Reset </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Social Icon Buttons</h4>
            <p class="card-description">Add class <code>.btn-social-icon</code></p>
            <div class="template-demo">
              <button type="button" class="btn btn-social-icon btn-outline-facebook"><i class="icon-social-facebook"></i></button>
              <button type="button" class="btn btn-social-icon btn-outline-youtube"><i class="icon-social-youtube"></i></button>
              <button type="button" class="btn btn-social-icon btn-outline-twitter"><i class="icon-social-twitter"></i></button>
              <button type="button" class="btn btn-social-icon btn-outline-dribbble"><i class="icon-social-dribbble"></i></button>
              <button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="icon-social-linkedin"></i></button>
              <button type="button" class="btn btn-social-icon btn-outline-google"><i class="icon-social-google"></i></button>
            </div>
            <div class="template-demo">
              <button type="button" class="btn btn-social-icon btn-facebook"><i class="icon-social-facebook"></i></button>
              <button type="button" class="btn btn-social-icon btn-youtube"><i class="icon-social-youtube"></i></button>
              <button type="button" class="btn btn-social-icon btn-twitter"><i class="icon-social-twitter"></i></button>
              <button type="button" class="btn btn-social-icon btn-dribbble"><i class="icon-social-dribbble"></i></button>
              <button type="button" class="btn btn-social-icon btn-linkedin"><i class="icon-social-linkedin"></i></button>
              <button type="button" class="btn btn-social-icon btn-google"><i class="icon-social-google"></i></button>
            </div>
            <div class="template-demo">
              <button type="button" class="btn btn-social-icon btn-facebook btn-rounded"><i class="icon-social-facebook"></i></button>
              <button type="button" class="btn btn-social-icon btn-youtube btn-rounded"><i class="icon-social-youtube"></i></button>
              <button type="button" class="btn btn-social-icon btn-twitter btn-rounded"><i class="icon-social-twitter"></i></button>
              <button type="button" class="btn btn-social-icon btn-dribbble btn-rounded"><i class="icon-social-dribbble"></i></button>
              <button type="button" class="btn btn-social-icon btn-linkedin btn-rounded"><i class="icon-social-linkedin"></i></button>
              <button type="button" class="btn btn-social-icon btn-google btn-rounded"><i class="icon-social-google"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Social button with text</h4>
            <p class="card-description">Add class <code>.btn-social-icon-text</code></p>
            <div class="template-demo">
              <button type="button" class="btn btn-social-icon-text btn-facebook"><i class="icon-social-facebook"></i>Facebook</button>
              <button type="button" class="btn btn-social-icon-text btn-youtube"><i class="icon-social-youtube"></i>Youtube</button>
              <button type="button" class="btn btn-social-icon-text btn-twitter"><i class="icon-social-twitter"></i>Twitter</button>
              <button type="button" class="btn btn-social-icon-text btn-dribbble"><i class="icon-social-dribbble"></i>Dribbble</button>
              <button type="button" class="btn btn-social-icon-text btn-linkedin"><i class="icon-social-linkedin"></i>Linkedin</button>
              <button type="button" class="btn btn-social-icon-text btn-google"><i class="icon-social-google"></i>Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'buttons'
}
</script>