var app = angular.module("UserAuthTutorial", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
	$stateProvider
        .state("login", {
        url:"/",
        controller: "LoginController",
        templateUrl: "views/login.html"
        })
        
        .state("reg", {
        url:"/reg",
        controller: "LoginController",
        templateUrl: "views/registro.html"
        })
        
        .state("application", {
        url:"/app",
        controller: "MainController",
        templateUrl: "views/principal.html",
        params: {'test': null}
        })

    .state("simulador", {
        url:"/simulador",
        controller: "Simulador",
        controller: "MainController",
        templateUrl: "views/simulador.html",
        params: {'test': null}
        })








})

