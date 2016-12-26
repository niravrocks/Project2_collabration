var app=angular.module("myApp",['ngRoute'])
app.config(function($routeProvider){
	console.log('entering configuration')
	$routeProvider
	
	.when('/login',{
		controller:'UserController',
		templateUrl:'_user/login.html'
	})
	
	.when('/home',{
		templateUrl:'_home/home.html'
	})
	
	.when('/register',{
		controller:'UserController',
		templateUrl:'_user/register.html'
	})
	
	.when('/listUsers',{
		controller:'UserController',
		templateUrl:'_user/listUsers.html'
	})
	
	.when('/edit',{
		controller:'EditUserController',
		templateUrl:'_user/editUser.html'
	})
	
	.when('/editJob',{
		controller:'EditJobController',
		templateUrl:'_job/editJob.html'
	})
	
	.when('/postJob',{
		controller:'JobController',
		templateUrl:'_job/createJob.html'
	})
	
	.when('/listJobs',{
		controller:'JobController',
		templateUrl:'_job/listJobs.html'
	})
	.when('/listpJobs',{
		controller:'JobController',
		templateUrl:'_job/listJobs.html'
	})
	
	.when('/listrJobs',{
		controller:'JobController',
		templateUrl:'_job/listJobs.html'
	})
	
})