angular.module('turingCalendar')

    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'app/schedule/schedule.html',
                controller: 'ScheduleController'
            })
            .otherwise({
                redirectTo : '/'
            });
    })