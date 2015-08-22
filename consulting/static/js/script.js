var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ipsum']);
myApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: '/static/templates/home.html'
  }).when('/what-we-do', {
    controller: 'WhatWeDoController',
    templateUrl: '/static/templates/what-we-do.html'
  }).when('/contact', {
    controller: 'ContactController',
    templateUrl: '/static/templates/contact.html'
  });
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // 2 reasons: Allows request.is_ajax() method to work in Django
  // Also, so 500 errors are returned in responses (for debugging)
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

function MyController($scope) {
}
function HomeController($http, $scope, $routeParams) {
  $('.secondary-nav ul li').removeAttr('class');
  $('#home-link-li').attr('class', 'active');
}
function WhatWeDoController($http, $scope, $routeParams) {
  $('.secondary-nav ul li').removeAttr('class');
  $('#what-we-do-link-li').attr('class', 'active');
}
function ContactController($http, $scope, $routeParams) {
  $('.secondary-nav ul li').removeAttr('class');
  $('#contact-link-li').attr('class', 'active');
}
myApp.controller('MyController', MyController);
myApp.controller('HomeController', HomeController);
myApp.controller('WhatWeDoController', WhatWeDoController);
myApp.controller('ContactController', ContactController);



