angular.module('turingCalendar').directive('calendar',calendar);

function calendar(){

    return {
        restrict: 'AE',
        templateUrl: 'app/calendar/calendar.html',
        link : function (scope, element, attrs, controllers){
          $(document).ready(function() {
            console.log(element);
              element.fullCalendar({
                  height: 600,
                  minTime: '10:00:00',
                  maxTime: '20:00:00',
                  firstDay: 1,
                  defaultView: 'agendaWeek',
                  googleCalendarApiKey: 'AIzaSyCTb9ibVTxtRHIeLlMYU5gSi1OjTWDgxBk',
                  events: {
                      googleCalendarId: 'info.turinglab@gmail.com',
                      color: 'green'
                  },
                dayClick : function(date){

                    // console.log(scope);
                    scope.$emit('addEvent',date);
                    // console.log(date);
                },
                eventClick : function(event){
                    // console.log(event);
                    scope.$emit('selectEvent',event);
                    return false;
                },
                eventRender: function(event, element) {
                    console.log(event);
                }
              });
          });
        }
    };

};