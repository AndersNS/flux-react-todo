This is just a simple app to show how you can the flux architecture with reactJS works. Code is pretty heavily commented so shouldn't be much of a problem to understand. 

### Flux in 10 seconds

The react component TodoListApp gets the state of the todo list from the store *(TodoItemStore.js)* when the component is first initialized. When the initial rendering of the TodoListApp is complete, the component subscribes to change events coming from the TodoItemStore. The TodoListApp component serves as the top component, and is the only component with a state. Its state is passed to its children through props. When a child component wants to change the state of our todo list it uses an action *(TodoListActions.js)* to dispatch the action onto the dispatcher *(AppDispatcher.js)*. The todo item store *(TodoItemStore.js)* is subscribed to the actions related to todo items (which happens to be all actions in this small example). When the store catches one of these actions it updates its state and emits a change event. The change event then triggers the _onChange method in the TodoListApp component which sets the state of the component to the new state from the store. When setState is called the component and all its children are re-rendered.  


There is no external API or backend in this application. Where you want to plug your API in is completely up to you with flux. You can have the store do calls against a REST-api, or you can have an action which is triggered when your backend pushes updates to your app. 

### ES6 
The code uses an ES6 transpiler, if the code is confusing to you check out [the ES6 features over on the babeljs docs page to get familiar with ES6.](https://babeljs.io/docs/learn-es6/#ecmascript-6-features)

### Running the madness
To run this app do:
	
```
npm install
npm start
```

Then just open the index.html file in a browser. 