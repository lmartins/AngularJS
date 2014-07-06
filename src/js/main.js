'use strict';
var
  angular = require('angular'),
  ngDialog = require('ng-dialog');

var app = angular.module('gemStore', []);

app.controller('StoreController', function () {
  this.products = gems;

  // $scope.clickToOpen = function () {
  //   ngDialog.open({ template: 'popupTmpl.html' });
  // }
});

var gems = [
  {
    name: "Dodecahedron",
    price: 2.95,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    canPurchase: true,
    soldOut: false
  }
];

app.controller('PanelController', function () {

  this.tab = 1;

  this.selectTab = function (setTab) {
    this.tab = setTab;
  };
  this.isSelected = function (checkTab) {
    return this.tab === checkTab;
  };

});
