angular.module('turingCalendar')

    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'schedule/schedule.html',
                controller: 'ScheduleController'
            })
            .otherwise({
                redirectTo : '/'
            });
    })