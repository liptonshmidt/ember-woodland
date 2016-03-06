import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('orders', { path: '/orders' })
  this.route('orders')
});

export default Router;
