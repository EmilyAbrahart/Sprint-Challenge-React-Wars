# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a javascript library used for building user interfaces and provides a way of removing some of the workload from the DOM, allowing better performance, additional functionality and easier scalability when it comes to building large websites that rely on on a lot of data.

1.  What does it mean to _think_ in react?
React works in components, so thinking in react means you break down a webpage or web app into small components that you can then re-use as many times as needed to create the site you want.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Up until earlier this year, functional components weren't able to hold state - they were just javascript functions that returned a react element, whereas class components extend from the react component and can hold state. (As of earlier this year, functional components can now hold state due to the React 16.8 Hooks update.)

Functional components tend to be easier to read and test because they are plain JS functions and they take less code to essentially perform the same job as class components.

Class components are widely used in the industry as they're an older feature with a longer history of certain functionalities.

1.  Describe state.
State is a JS object that is managed within the component itself, that handles data for that component. A component's state cannot be changed by another component - state is 'private'.

1.  Describe props.
Props are variables/JS objects containing data passed to the component by its parent and are immutable as far as the component is concerned. 
