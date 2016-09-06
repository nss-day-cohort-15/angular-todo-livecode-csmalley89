"use strict";

app.controller("TopCtrl", function($scope, $location, $window, AuthFactory){
  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      $scope.isLoggedIn = true;
      console.log("Current User loggin in?", user.uid);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $window.location.href = "#/login";
    }
    $scope.$apply();
  });
  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out", data);
    });
  };

});
