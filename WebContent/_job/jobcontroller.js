app.controller('JobController', function($scope, $rootScope,$location, JobService) {
	$scope.jobs;
	$scope.job = {
			jobId : '',
			hasexpired : '',
			jobDescription : '',
			jobTitle : '',
			location : '',
			postedon : '',
			salary : '',
			skillsRequired : '',
			status : '',
			validity : ''
	}
	
	function fetchAllJobs(){
		console.log('entering fetchall jobs in job controller')
		JobService.fetchAllJobs().then(
				function(d){
					$scope.jobs=d;
				},
				function(error){
					console.log(error);
				}
		)
	}
	fetchAllJobs();

	
	$scope.saveJob = function() {
		console.log('enteringsave job in job controller')

		JobService.saveJob($scope.job).then(function(response) {
			console.log("successfully inserted job details");
			alert("Posted job successfully");
			$location.path('/home');
		}, function(response) {
			console.log("failure " + response.status);
			console.log(response.data.message)
			$location.path('/postJob')
		})
	}
	
	
	/*function getAllJobs() {
		console.log('entering get all jobs')
		JobService.getAllJobs().then(function(response) {
			console.log(response.status);
			$scope.jobs = response.data;

		}, function(response) {
			console.log(response.status)
		})

	}
	getAllJobs();*/

	$scope.deleteJob=function(id){
		console.log("entering delete user in controller with id " + id)
		JobService.deleteJob(id).then(
				function(d){
			console.log('deleted successfully')
			console.log(d)
			fetchAllJobs();
			$location.path('/listJobs')
		},function(){
			console.log("unable to delete the record")
		})
		
	}
})
