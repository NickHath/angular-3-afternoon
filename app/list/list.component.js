angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',
  controller: function($state, swagSrvc) {
    $state.swag = swagSrvc.swag;
    $state.goToDetails = function(id) {
      $state.go('details', {id: id});
    }
  }
})