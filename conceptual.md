### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To allow developers to put client side routes in their React apps that don't reload the page

- What is a single page application?
A web app that doesn't require loading in new pages.

- What are some differences between client side and server side routing?
In client side routing, the browser deals with mapping the url and the page, instead of the server. Server side routing requires page loading.

- What are two ways of handling redirects with React Router? When would you use each?
1) The Redirect component
You would this when you want a default route that any unknown route will redirect to

2) The history object
You would use this when you need a function to let you redirect.

- What are two different ways to handle page-not-found user experiences using React Router? 
Using a default Route component
Using a Redirect component

- How do you grab URL parameters from within a component using React Router?
Using the useParameters function.

- What is context in React? When would you use it?
Context is a component that lets every child component have access to functions and data. You would use it when you have data stored in a component that needs to be accessed by either a lot of child components and/or is needed by a child component many layers down.

- Describe some differences between class-based components and function
  components in React.
Class-based components are overall more complicated.
Class-based components have access to component life-cycle functions instead of hook methods.

- What are some of the problems that hooks were designed to solve?
Sharing code and functions across components and reducing duplicated code.