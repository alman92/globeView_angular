angular
.module("globeViewApp", [
  "ui.router"
])
.config(["$stateProvider", Router])

.controller("globeViewIndex", [globeViewIndexController])

function Router($stateProvider){
  $stateProvider
  .state("globeIndex", {
    url: "/globeView",
    templateUrl: "globeView_angular/ng-views.index.html",
    controller: "globeViewIndexController",
    controllerAs: "vm"
  });
}



function globeViewIndexController() {

}
