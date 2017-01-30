app.controller("MainController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in

    $scope.ModificarPassword = {
        passwordvieja: undefined,
        passwordnueva: undefined
       }

	var token;
	if (localStorage['token']){
    token = JSON.parse(localStorage['token']);
	} else {
	token = "something stupid";
	}
	AuthenticationService.checkToken(token);
	
	$scope.logout = function(){
		var data = {
			token: token
		}
		
		$http.post('endpoints/logout.php', data).success(function(response){
			console.log(response)
			localStorage.clear();
			$state.go("login");
		}).error(function(error){
			console.error(error);
		})
	}

    $scope.ModificarPassword = function () {
         var data = {
            passwordvieja: $scope.ModificarPassword.passwordvieja,
            passwordnueva: $scope.ModificarPassword.passwordnueva,
			token: token
    
        }
        
        $http.post("endpoints/modificarclave.php", data).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            $state.go("login");
        }).error(function(error){
            console.error(error);
        });
    
    }


})