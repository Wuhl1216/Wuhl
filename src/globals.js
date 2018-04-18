export default {
  install(Vue, options) {
    Vue.prototype.BaseUrl = 'http://119.23.149.25:8089/';
    Vue.prototype.headerJSON = "{header:{'content-type': 'application/json;charset=UTF-8'}}";
  }
}
