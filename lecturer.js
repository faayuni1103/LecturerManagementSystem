myApp.controller('lectController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
    $scope.lectDetail = function(item){
        $location.path('/lecturer-detail'); 
        var idx = $scope.lect.indexOf(item);
        $rootScope.img = $scope.lect[idx].img;
        $rootScope.staffID = $scope.lect[idx].staffID;
        $rootScope.name = $scope.lect[idx].name;
        $rootScope.roomNo = $scope.lect[idx].roomNo;
        $rootScope.totalCourse = $scope.lect[idx].totalCourse;
        $rootScope.username = $scope.lect[idx].username;
        $rootScope.password = $scope.lect[idx].password;
        $rootScope.email = $scope.lect[idx].email;
        $rootScope.rblock = $scope.lect[idx].rblock;
        $rootScope.position = $scope.lect[idx].position;
        $rootScope.faculty = $scope.lect[idx].faculty;
    };

    $scope.viewsubject = function() {
        $location.path('/course-lect-list'); 
    }

    $scope.viewstudent = function(item) {
        $location.path('/view-student');
        var idx = $scope.course.indexOf(item);
        $rootScope.courseCode = $scope.course[idx].courseCode;
        $rootScope.courseName = $scope.course[idx].courseName;
        $rootScope.section = $scope.course[idx].section;
        $rootScope.session = $scope.course[idx].session;
        $rootScope.semester = $scope.course[idx].semester;
        $rootScope.credit = $scope.course[idx].credit;
        $rootScope.studNo = $scope.course[idx].studNo;
        $rootScope.location = $scope.course[idx].location;
        $rootScope.time = $scope.course[idx].time;
        $rootScope.day = $scope.course[idx].day;
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

    $http.get('lecture.json').then(
        function(response){
            console.log(response.data);
            $scope.lect = response.data;
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

    $http.get('student.json').then(
        function(response){
            console.log(response.data);
            $scope.stud = response.data;
        },
        function(response){
            alert("AJAX connection error!");
        }
    );
}]);