'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaultOptions = { messageNoData: '', classNoData: 'ct-nodata' };
  options = Object.assign({}, defaultOptions, options);

  Vue.chartist = require('chartist');
  Vue.prototype.$chartist = require('chartist');

  Vue.component('Chartist', {
    props: {
      ratio: {
        type: String,
        default: 'ct-square'
      },
      data: {
        type: Object,
        default: function _default() {
          return {
            series: [],
            labels: []
          };
        }
      },
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      type: {
        type: String,
        required: true,
        validator: function validator(val) {
          return val === 'Pie' || val === 'Line' || val === 'Bar';
        }
      },
      eventHandlers: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      responsiveOptions: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        chart: null,
        error: { onError: false, message: '' },
        noData: false,
        message: '',
        classNoData: options.classNoData
      };
    },

    watch: {
      ratio: 'redraw',
      options: { handler: 'redraw', deep: true },
      data: { handler: 'redraw', deep: true },
      type: 'draw',
      eventHandlers: 'resetEventHandlers'
    },
    mounted: function mounted() {
      this.draw();
    },

    methods: {
      clear: function clear() {
        this.noData = false;
        this.message = '';
        if (this.error.onError) {
          this.error = { onError: false, message: '' };
        }
      },
      draw: function draw() {
        if (this.haveNoData()) {
          return this.setNoData();
        }
        this.clear();
        this.chart = new this.$chartist[this.type](this.$refs.chart, this.data, this.options, this.responsiveOptions);
        this.setEventHandlers();
      },
      haveNoData: function haveNoData() {
        return !this.data || !this.data.series || this.data.series.length < 1 || this.type !== 'Pie' && !this.options.distributeSeries && this.data.series.every(function (series) {
          if (Array.isArray(series)) {
            return !series.length;
          }
          return !series.data.length;
        });
      },
      redraw: function redraw() {
        if (this.error.onError) {
          return this.draw();
        } else if (this.haveNoData()) {
          return this.setNoData();
        }
        this.clear();
        this.chart.update(this.data, this.options);
      },
      resetEventHandlers: function resetEventHandlers(eventHandlers, oldEventHandler) {
        if (!this.chart) {
          return;
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oldEventHandler[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            this.chart.off(item.event, item.fn);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = eventHandlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _item = _step2.value;

            this.chart.on(_item.event, _item.fn);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      },
      setEventHandlers: function setEventHandlers() {
        if (this.eventHandlers) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.eventHandlers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var item = _step3.value;

              this.chart.on(item.event, item.fn);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      },
      setNoData: function setNoData() {
        this.error = { onError: true, message: options.messageNoData };
        this.noData = true;
        this.message = this.error.message;
      }
    },
    render: function render(h) {
      var children = this.message || this.$slots.default || [];

      return h('div', {
        ref: 'chart',
        'class': [this.ratio, _defineProperty({}, this.classNoData, this.noData)]
      }, children);
    }
  });
};
