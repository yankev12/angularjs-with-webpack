import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './../features/home';
import randomNames from './../services/randomNames.service';
import greeting    from './../directives/greeting.directive';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, randomNames, greeting])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(routing);

export default MODULE_NAME;