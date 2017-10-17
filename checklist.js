
<script>
var app = angular.module("routes", []);
app.controller("myCtrl", function($scope){
$scope.routes = ["the darkest woods", "up & down the river", "hills for days"];
$scope.addItem= function(){
$scope.routes.push($scope.addMe);
}
$scope.removeItem = function(x) {
$scope.routes.splice(x,1);
}
});

</script>

<div ng-app="routes" ng-controller = "myCtrl">
<ul>
<li ng-repeat= "x in routes">{{x}}
<span ng-click = "removeItem($index)">x
</span>
</li>
</ul>
<input ng-model = "addMe">
<button ng-click = "addItem()">Add</button>

