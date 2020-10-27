<template>
  <section class="orders">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Orders</h4>
            <div class="row grid-margin">
              <div class="col-12">
                <div class="alert alert-warning" role="alert">
                  <strong>Heads up!</strong> This alert needs your attention, but it's not super important. </div>
              </div>
            </div>
            <div class="row overflow-auto">
              <div class="col-12">
                <b-table :items="items" id="table-list" responsive :per-page="perPage" :current-page="currentPage" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
              <template v-slot:cell(status)="data">
                <span v-html="data.value"></span>
              </template>
              <template v-slot:cell(action)="data">
                <span v-html="data.value"></span>
              </template>
            </b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="table-list"
              align="right">
            </b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import SortedTablePlugin from "vue-sorted-table";

Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="icon-arrow-down"></i>',
  descIcon: '<i class="icon-arrow-up"></i>'
});

export default {
  data: function() {
    return {
      perPage: 10,
      sortBy: 'name',
        currentPage: 1,
        sortDesc: false,
        sortByFormatted: true,
        filterByFormatted: true,
        sortable: true,
        fields: [
          { key: 'order', sortable: true },
          { key: 'purchasedOn', sortable: true },
          { key: 'customer', sortable: true },
          { key: 'shipTo', sortable: true },
          { key: 'basePrice', sortable: true },
          { key: 'purchasedPrice', sortable: true },
          { key: 'status', sortable: true },
          { key: 'action', sortable: true }
        ],
        items: [
          {
            order: 'XN-1',
            purchasedOn: '25/09/2019',
            customer: 'Edinburgh',
            shipTo: 'New York',
            basePrice: '$1500',
            purchasedPrice: '$3200',
            status: '<label class="badge badge-info">On hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-2',
            purchasedOn: '26/09/2019',
            customer: 'Doe',
            shipTo: 'Brazil',
            basePrice: '$4500',
            purchasedPrice: '$7500',
            status: '<label class="badge badge-danger">Pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-3',
            purchasedOn: '26/09/2019',
            customer: 'Sam',
            shipTo: 'Tokyo',
            basePrice: '$2100',
            purchasedPrice: '6300',
            status: '<label class="badge badge-success">success</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-4',
            purchasedOn: '27/09/2019',
            customer: 'Joe',
            shipTo: 'Netherland',
            basePrice: '$1100',
            purchasedPrice: '$7300',
            status: '<label class="badge badge-warning">pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-5',
            purchasedOn: '28/09/2019',
            customer: 'Edward',
            shipTo: 'Indonesia',
            basePrice: '$3600',
            purchasedPrice: '$4800',
            status: '<label class="badge badge-danger">pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-6',
            purchasedOn: '28/09/2019',
            customer: 'Stella',
            shipTo: 'Japan',
            basePrice: '$5600',
            purchasedPrice: '$3600',
            status: '<label class="badge badge-success">success</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-7',
            purchasedOn: '28/09/2019',
            customer: 'Jaqueline',
            shipTo: 'Germany',
            basePrice: '$1100',
            purchasedPrice: '$6300',
            status: '<label class="badge badge-success">success</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-8',
            purchasedOn: '29/09/2019',
            customer: 'Tim',
            shipTo: 'Italy',
            basePrice: '$6300',
            purchasedPrice: '$2100',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-9',
            purchasedOn: '29/09/2019',
            customer: 'John',
            shipTo: 'Tokyo',
            basePrice: '$2100',
            purchasedPrice: '$6300',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-10',
            purchasedOn: '29/09/2019',
            customer: 'Tom',
            shipTo: 'Germany',
            basePrice: '$1100',
            purchasedPrice: '$2300',
            status: '<label class="badge badge-danger">pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-11',
            purchasedOn: '30/09/2019',
            customer: 'Aleena',
            shipTo: 'New York',
            basePrice: '$1600',
            purchasedPrice: '$3500',
            status: '<label class="badge badge-danger">pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-12',
            purchasedOn: '01/10/2019',
            customer: 'Alphy',
            shipTo: 'Brazil',
            basePrice: '$5500',
            purchasedPrice: '$7200',
            status: '<label class="badge badge-danger">pending</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-13',
            purchasedOn: '02/10/2019',
            customer: 'Twinkle',
            shipTo: 'Italy',
            basePrice: '$1560',
            purchasedPrice: '$2530',
            status: '<label class="badge badge-success">closed</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-14',
            purchasedOn: '02/10/2019',
            customer: 'Catherine',
            shipTo: 'Brazil',
            basePrice: '$1600',
            purchasedPrice: '$5600',
            status: '<label class="badge badge-success">closed</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-15',
            purchasedOn: '05/10/2019',
            customer: 'Daniel',
            shipTo: 'Singapore',
            basePrice: '$6800',
            purchasedPrice: '$9800',
            status: '<label class="badge badge-success">closed</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-16',
            purchasedOn: '07/10/2019',
            customer: 'Tom',
            shipTo: 'Tokyo',
            basePrice: '$1600',
            purchasedPrice: '$6500',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-17',
            purchasedOn: '07/10/2019',
            customer: 'Cris',
            shipTo: 'Tokyo',
            basePrice: '$2100',
            purchasedPrice: '$6300',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-18',
            purchasedOn: '09/10/2019',
            customer: 'Tim',
            shipTo: 'Italy',
            basePrice: '$6300',
            purchasedPrice: '$2100',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-19',
            purchasedOn: '11/10/2019',
            customer: 'Jack',
            shipTo: 'Tokyo',
            basePrice: '$3100',
            purchasedPrice: '$7300',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
          {
            order: 'XN-20',
            purchasedOn: '14/10/2019',
            customer: 'Tony',
            shipTo: 'Germany',
            basePrice: '$1100',
            purchasedPrice: '$2300',
            status: '<label class="badge badge-info">on hold</label>',
            action: '<button class="btn btn-outline-primary px-4 py-1"><i class="icon-eye text-primary mr-2"></i>View</button>',
          },
        ]
    };
  },
  computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>