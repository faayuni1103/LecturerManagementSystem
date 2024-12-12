var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        })
        .when("/profile", {
            templateUrl: "profile.html",
            controller: "homeController"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "homeController"
        })
        .when("/lecturer", {
            templateUrl: "lecturer.html",
            controller: "lectController"
        })
        .when("/course-lect-list", {
            templateUrl: "course-lect-list.html",
            controller: "lectController"
        })
        .when("/view-student", {
            templateUrl: "view-student.html",
            controller: "lectController"
        })
        .when("/student", {
            templateUrl: "student.html",
            controller: "studController"
        })
        .when("/course-list", {
            templateUrl: "course-list.html",
            controller: "studController"
        })
        .when("/timetable", {
            templateUrl: "timetable.html",
            controller: "studController"
        })
        .when("/book-venue", {
            templateUrl: "book-venue.html",
            controller: "venueController"
        })
        .when("/student-detail", {
            templateUrl: "student-detail.html",
            controller: "studController"
        })
        .when("/lecturer-detail", {
            templateUrl: "lecturer-detail.html",
            controller: "lectController"
        })
        .otherwise({
            redirectTo: '/home'
        })
        
}]);