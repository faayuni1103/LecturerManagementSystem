myApp.controller('homeController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
    $scope.login = function(username, password) {
        $http.get('lecture.json').then(
            function (response) {
                $rootScope.lect = response.data;
                console.log($rootScope.lect);
                console.log($rootScope.lect.length)
                for(i in $rootScope.lect) {
                    if ((username == $rootScope.lect[i].username) && (password == $rootScope.lect[i].password)) {
                        $location.path('/home');
                        $rootScope.limg = $scope.lect[i].img;
                        $rootScope.lstaffID = $scope.lect[i].staffID;
                        $rootScope.lname = $scope.lect[i].name;
                        $rootScope.lroomNo = $scope.lect[i].roomNo;
                        $rootScope.ltotalCourse = $scope.lect[i].totalCourse;
                        $rootScope.lusername = $scope.lect[i].username;
                        $rootScope.lpassword = $scope.lect[i].password;
                        $rootScope.lemail = $scope.lect[i].email;
                        $rootScope.lrblock = $scope.lect[i].rblock;
                        $rootScope.lposition = $scope.lect[i].position;
                        $rootScope.lfaculty = $scope.lect[i].faculty;
                        break;
                    } 
                }
                if(i == $rootScope.lect.length-1)
                    alert("Login error!");
                
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );
    };

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