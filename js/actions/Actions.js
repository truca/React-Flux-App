var AppDispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var Actions = {
	logIn: function(data){
		AppDispatcher.handleAction({
			actionType: Constants.LOG_IN,
			data: data
		})
	}
}