/*******************  BASICS OF REACT ******************* /
INTRODUCTION:
The world can't live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions.
Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.

1. WHAT IS REACT?
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.

2. ReactJS History:-
When compared to other technologies on the market, React is a new technology. Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life. The likes of XHP, a straightforward HTML component framework for PHP, have an influence on React. React's newsfeed was its debut application in 2011. Later, Instagram picks it up and incorporates it into their platform.

3. WHY  REACT?

* Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.
* Improved performance: React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do. 
* Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time.
* Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.
* Small learning curve: React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions. Still, as is the case with other tools and frameworks, you have to spend some time to get a proper understanding of React’s library.
* It can be used for the development of both web and mobile apps: We already know that React is used for the development of web applications, but that’s not all it can do. There is a framework called React Native, derived from React itself, that is hugely popular and is used for creating beautiful mobile applications. So, in reality, React can be used for making both web and mobile applications.
* Dedicated tools for easy debugging: Facebook has released a Chrome extension that can be used to debug React applications. This makes the process of debugging React web applications faster and easier.
  The above reasons more than justify the popularity of the React library and why it is being adopted by a large number of organizations and businesses. Now let’s familiarize ourselves with React’s features.

When making lists of components in React, you must use a special string personality factor "key". React uses keys to indicate which list items have been modified, destroyed, or altered. Or, to put it another way, we may say that keys are utilized to identify the components in lists. 

4. ReactJS ADVANTAGES

* React.js builds a customized virtual DOM. Because the JavaScript virtual DOM is quicker than the conventional DOM, this will enhance the performance of apps. 
* ReactJS makes an amazing UI possible. 
* Search - engine friendly ReactJS. 
* Modules and valid data make larger apps easier to manage by increasing readability. 
* React integrates various architectures. 
* React makes the entire scripting environment process simpler. 
* It makes advanced maintenance easier and boosts output. 
* Guarantees quicker rendering 
* The availability of a script for developing mobile apps is the best feature of React.
* ReactJS is supported by a large community.

5. JSX :-
JSX is a JavaScript syntactic extension. It's a term used in React to describe how the user interface should seem. You can write HTML structures in the same file as JavaScript code by utilizing JSX

*/const name = 'Simplilearn';

const greet = <h1>Hello, {name}</h1>;
/*
The above code shows how JSX is implemented in React. It is neither a string nor HTML. Instead, it embeds HTML into JavaScript code.


5. VITUAL DOM:
* The Virtual DOM is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation. 
  When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.

What is the DOM?
DOM (Document Object Model) treats an XML or HTML document as a tree structure in which each node is an object representing a part of the document.

How do Virtual DOM and React DOM interact with each other?
When the state of an object changes in a React application, VDOM gets updated. It then compares its previous state and then updates only those objects in the real DOM instead of updating all of the objects. 
This makes things move fast, especially when compared to other front-end technologies that have to update each object even if only a single object changes in the web application.



