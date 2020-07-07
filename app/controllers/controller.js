var fetch = angular.module("myApp", []);

fetch.controller("showData", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http({
      method: "get",
      url: "api/getData.php",
    }).then(function successCallback(response) {
      $scope.names = response.data;
    });
  },
]);
