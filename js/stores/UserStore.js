var AppDispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var _ = require('underscore');

var user, isLoggedIn = false;

function logIn(data){

}
function logOut(data){

}

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case Constants.LOG_IN:
			logIn(action.data);
			break;
		case Constants.LOG_OUT:
			logOut(action.data);
			break;
		default:
			break;
	}
	
});

var userStore = {
	getEmail: function(){
		if(isLoggedIn) return user.email;
		else return false;
	}
}