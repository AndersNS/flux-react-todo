const Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function handleAction(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action,
  });
};

module.exports = AppDispatcher;
