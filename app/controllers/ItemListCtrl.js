"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
  ItemStorage.getItemList(user)
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr;
  });
  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then ((response) => {
      ItemStorage.getItemList(user)
      .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
        });
    });
  };
});



  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyATUR47-pCvNafkccfCdMOtQp_iOdKo2rI",
  //   authDomain: "todo-angular-app.firebaseapp.com",
  //   databaseURL: "https://todo-angular-app.firebaseio.com",
  //   storageBucket: "todo-angular-app.appspot.com",
  // };
  // firebase.initializeApp(config);
