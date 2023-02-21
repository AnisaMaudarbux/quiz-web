angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapiam-env-2.eba-cbt7kafr.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);