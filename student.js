myApp.controller('studController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
    $scope.studDetail =  function(item) {
        $location.path('/student-detail'); 
        var idx = $scope.stud.indexOf(item);
        $rootScope.img = $scope.stud[idx].img;
        $rootScope.matricID = $scope.stud[idx].matricID;
        $rootScope.progName = $scope.stud[idx].progName;
        $rootScope.progCode = $scope.stud[idx].progCode;
        $rootScope.name = $scope.stud[idx].name;
        $rootScope.email = $scope.stud[idx].email;
        $rootScope.totalCourse = $scope.stud[idx].totalCourse;
        $rootScope.totalCredit = $scope.stud[idx].totalCredit;
        $rootScope.year = $scope.stud[idx].year;
        $rootScope.phoneNo = $scope.stud[idx].phoneNo;
        $rootScope.faculty = $scope.stud[idx].faculty;
    }; 

    $scope.viewtimetable = function() {
        $location.path('/timetable'); 
    }

    $scope.viewtotalsub = function() {
        $location.path('/course-list'); 
    }

    $scope.logout = function() {
        $rootScope.lect = null;
        $rootScope.limg = null;
        $rootScope.lstaffID = null;
        $rootScope.lname = null;
        $rootScope.lroomNo = null;
        $rootScope.ltotalCourse = null;
        $rootScope.lusername = null;
        $rootScope.lpassword = null;
        $rootScope.lemail = null;
        $rootScope.lrblock = null;
        $rootScope.lposition = null;
        $rootScope.lfaculty = null;
        $location.path('/home');
    };

    $http.get('student.json').then(
        function(response){
            console.log(response.data);
            $scope.stud = response.data;
        },
        function(response){
            alert("AJAX connection error!");
        }
    );

    $http.get('course.json').then(
        function(response){
            console.log(response.data);
            $scope.course = response.data;
        },
        function(response){
            alert("AJAX connection error!");
        }
    );
}]);