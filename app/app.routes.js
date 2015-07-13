angular.module('turingCalendar')

    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'calendar/calendar.html',
                controller: 'CalendarController'
            })
            .otherwise({
                redirectTo : '/'
            });
    })