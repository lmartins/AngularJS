
'use strict';
var
  angular = require('angular'),
  storeProducts = require('./product'),
  ngDialog = require('ng-dialog');

var app = angular.module('gemStore', ['firebase', 'store-products']);

var gems = [
  {
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif",
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@example.org",
      createdOn: 1397490980837
    }]
  }
];


app.controller('StoreController', [ '$http' , function ($http) {
  // this.products = gems;
  var store = this;
  store.products = [];

  // $scope.clickToOpen = function () {
  //   ngDialog.open({ template: 'popupTmpl.html' });
  // }
  $http.get('products.json')
    .success( function (data) {
      store.products = data;
    });

}]);


app.controller('GalleryController', function () {
  this.current = 0;
  this.setCurrent = function (value) {
    this.current = value || 0;
  };
});

app.controller('ReviewController', function ($scope) {
  this.review = {};
  this.addReview = function (product) {
    product.reviews.push(this.review);
    this.review = {};
  };
});

app.controller('CommentsController', function ($scope, $firebase) {
  var ref = new Firebase("https://rjozrl9jsvm.firebaseio-demo.com/");
  $scope.messages = $firebase(ref);

  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({from: $scope.name, body: $scope.msg});
    $scope.msg = "";
  };
});
