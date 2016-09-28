var app = angular.module('MyApp', ["ngRoute", "satellizer", "chart.js"]);

app.config(['$routeProvider', '$locationProvider', '$authProvider', function($routeProvider, $locationProvider, $authProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'TransactionCtrl'
      })
      .when('/send-money', {
        templateUrl: 'partials/send-money.html',
        controller: 'TransactionCtrl',
        resolve: {
        postPromise: ['Activity', function(Activity){
          var currUserId = JSON.parse(localStorage.user)._id;
          return Activity.get(currUserId);
         }]
       }
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'AdminCtrl',
        resolve: {
        postPromise: ['Admin', function(Admin){
          var currUserId = JSON.parse(localStorage.user)._id;
          return Admin.get(currUserId);
         }]
       }
      })
      .when('/customers', {
        templateUrl: 'partials/customers.html',
        controller: 'AdminCtrl',
        resolve: {
        postPromise: ['Admin', function(Admin){
          var currUserId = JSON.parse(localStorage.user)._id;
          return Admin.get(currUserId);
         }]
       }
      })
      .when('/analytics', {
        templateUrl: 'partials/analytics.html',
        controller: 'AnalyticsCtrl'
      })
      .when('/activity', {
        templateUrl: 'partials/activity.html',
        controller: 'ActivityCtrl',
        resolve: {
         postPromise: ['Activity', function(Activity){
         return Activity.getAll();
         }]
       }
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/account', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/forgot', {
        templateUrl: 'partials/forgot.html',
        controller: 'ForgotCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';
    $authProvider.facebook({
      url: '/auth/facebook',
      clientId: '125373027923412',
      redirectUri: 'http://localhost:3000/auth/facebook/callback'
    });

    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }

  }
 ]);
  
  app.run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });

