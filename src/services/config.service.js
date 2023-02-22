angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapiam-env.eba-cbt7kafr.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);