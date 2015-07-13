angular.module('turingCalendar').controller('ScheduleController',[
    '$scope',
    ScheduleController
    ]);

function ScheduleController($scope){

    $scope.hello = "HELLO WORLD";

    var addEvent = function(message,date){
      console.log('adding event',date);
    };

    var selectEvent = function(message,entry){
      console.log('selecting event',entry);
    };
    
    $scope.$on('addEvent',addEvent);
    $scope.$on('selectEvent',selectEvent);

};