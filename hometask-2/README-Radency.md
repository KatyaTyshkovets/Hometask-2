Hometask #2 | React, Redux

Your task is to rewrite the existing notes app using React.js, Redux (or Redux Toolkit) and TypeScript.
All the functionality should be the same - users can add, edit and remove notes, archive and unarchive them.  
Store data in the redux store. Prepopulate it with 7 notes and use it by default as an initial state so that they are shown when the page is reloaded.
Aim to structure components properly (container, page, component), reuse components, and reflect the apps component hierarchy:
https://dev.to/admantium/structuring-react-components-n6g
Bonus task: Tables for “List of notes” and “Summary” should use the same table component.



The goal of the task is to let you get better acquainted with React.js and Redux. If you don’t know some of the APIs needed for the task, you might use these resources as references:
https://reactjs.org/docs/getting-started.html
https://redux.js.org/api/api-reference


While working on your task you should utilize all of the following:
React
Functional (a.k.a. stateless) component 
React Hooks
Redux
Use Action Creators, write meaningful action names 
Keep the immutability and readability of your reducers
Do not transform your store data in the components
Use the Redux DevTools Extension for Debugging

To set up the basic React app structure use Create React App:
https://reactjs.org/docs/create-a-new-react-app.html

Using template “typescript”:
npx create-react-app my-app --template typescript

Or use the following guide:
https://create-react-app.dev/docs/adding-typescript


To connect the Redux library use Redux Core or Redux Toolkit (which is not recommended for beginners):
https://redux.js.org/introduction/getting-started


Or, as a basic boilerplate use the following repo:
https://github.com/yogeshdatir/React-Notes-and-Collections/tree/master/Redux/redux-boiler-plate/src/components
 
Use the following guide for writing the application using the best practices:
https://redux.js.org/style-guide/style-guide