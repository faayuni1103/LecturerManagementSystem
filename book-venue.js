myApp.controller('venueController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
    alert("You are allowed to book 1 venue ONLY at a time!!");
    var count = 1;
    $scope.availability = 
        [{ avail: "Available"}, 
         { avail: "Booked"}];

    $scope.selected = function() {
        if ($scope.selectedopt.avail == "Available")
            $scope.result = true;
        else
            $scope.result = false;
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

    $scope.bookVenue = function(item) {
        $scope.date = prompt("Please enter your booked date in DD-MM-YYYY format", "DD-MM-YYYY");
        $scope.time = prompt("Please enter your booked time in 24hours system format", "HHMM");
        var idx = $scope.venue.indexOf(item);

        $scope.booked = $scope.venue;
        $scope.booked[count].spacecode = $scope.venue[idx].spacecode;
        $scope.booked[count].rname = $scope.venue[idx].rname;
        $scope.booked[count].rcode = $scope.venue[idx].rcode;
        $scope.booked[count].block = $scope.venue[idx].block;
        $scope.booked[count].capacity = $scope.venue[idx].capacity;
        $scope.booked[count].available = false;
        $scope.venue[idx].available = false;
        count++;

        console.log(count);
        $scope.venue.splice(idx,1);
    }

    $http.get('venue.json').then(
        function(response){
            console.log(response.data);
            $scope.venue = response.data;
        },
        function(response){
            alert("AJAX connection error!");
        }
    );
}]);