app.factory('UserService',function($http){
	var userService=this;
	var BASE_URL="http://localhost:8079/niravbackend/"
userService.authenticate=function(user){
		return $http.post(BASE_URL + "/login",user);
	};
	
	userService.registerUser=function(user){
		console.log('entering service for registration')
		return $http.post(BASE_URL + "/register",user) 
	};
	
	
	userService.fetchAllUsers=function(){
		console.log('entering fetchall users in user service')
		//   '/person'  HttpMethod - GET
		return $http.get(BASE_URL + "/users")
		.then(function(response){
			//response - object returned from the back end
			//data, status, headers,statusText
			//data- list of persons
			console.log(response.data)
			console.log(response.status)
			return response.data
			
		},
		function(response){
			console.log(response.data)
			return response.data
		})
	};
	
	userService.updateUser=function(userid,user){
		console.log('update user in service')
		console.log('user id ' + userid)
		return $http.put(BASE_URL + "/user/"+userid, user);
	};
	

	userService.logout=function(){
		console.log('entering logout service')
		return $http.put(BASE_URL + "/logout")
	};
	
	userService.fetchAllUsers=function(){
		console.log('entering fetchall users in user service')
		//   '/person'  HttpMethod - GET
		return $http.get(BASE_URL + "/users")
		.then(function(response){
			//response - object returned from the back end
			//data, status, headers,statusText
			//data- list of persons
			console.log(response.data)
			console.log(response.status)
			return response.data
			
		},
		function(response){
			console.log(response.data)
			return response.data
		})
	};
	
	userService.getUser=function(id){
		return $http.get(BASE_URL + "/user/" + id)
	};
	
	
	

	userService.deleteUser=function(id){
		console.log("entering delete user in service with id " + id);
		return $http.delete(BASE_URL + "/user/"+id)
		.then(function(response){
			console.log(response.status)
			return response.status;
		},function(response){
			console.log(response.status)
			})
	};
	
	return userService;
})


