# react-practice

#Parcel - > #babel(transpile the code (js complier))
#babel work to combine in code in react code

#JSX
JSX is html like syntax
if u give attribute to jsx give in camel case

#import and export
there are two types
default and name .
#React Hook

- reack hooks are utils,'
- we can saythat they are functions.
- useState() - SupemPoweer State variable in react
- useEffect()

userState-

- when ever state varaible update react re- render the component.

---

Reconsilation algo / react fibe

- diff - algo - find the differnec e between actual dom and virtual dom.

- when any state update then whole comopnent call again -------- this is reconcialiation .
  using diff only that specific part change not all other change.

#use effect

- when useEffect caled?
  in every time after render the component .

useEffect(() =>{},[])

- two components
- one is callback (neccesarry )
- dependency Array (optional)
  there are three case of useEffect when its called

one -
one is if no dependencies
example -
useEffect(()=>{})
this is called in every time after render the component

secound -
useEffect(() =>{},[])
this is called at onece after render the component

third -
useEffect(() =>{},[value])
this is will called after the dependencies value is changed

#React-router-dom

React Router DOM - Key Components
When using react-router-dom, two main components are commonly used:

createBrowserRouter – Creates the router configuration.

It defines an array of route objects, each specifying:

path: The URL path.

element: The React component to render.

RouterProvider – Renders the router configuration to the actual DOM.

Example -
import {createBrowserRouter,RouterProvider} = React-Router-Dom;
import Home from "./pages/Home";
import About from "./pages/About";
import ReactDom from "react-dom/client";

const router = createBrowserRouter([
    {path: '/',
    element: <Home/>},
    {
    path: '/about',
    elemnt: <About/>
    }
])

const App() {
    return <RouterProvider router = {router}/>
}


const root = ReactDom.createRoot(document.getElementById('root))
root.render(<App/>)


createBrowserRouter() → Defines routes as an array of objects.
RouterProvider → Injects the router configuration into the React app.


----------------------------------
these two are not recomended to use in react - 
    <li><a href="/about">About Us</a></li>
    <li><a href="/contact">Contact</a></li>

use Link - this will update the only change then reloade or refresh the page (thats the one of them reson why react is fast.)

    <li><Link to="/about">About Us</Link></li>
    li><Link to="/contact">Contact</Link></li>

There are two types of routing -
- client side routing.
- server side routing.






# Class Based with component and function based component .

- when we create class based comonent and render the compone tthen it create one instance 
and when instance create first this call constructor then t=render the it 

# class base componet 
- this have one componentDidMount()
- this will call (mount after render)


how mounting - 
- componentDidMount() how there lifecycle work.
 - commit phase is call after render phase .

two phase - con, render, commit phase

- parnent class batch the child comonent then commit -- 

#componeDidMount()
#componetnDidUnmount()
#comonentWillUnmout()


---------------
# custom Hook.

when u create hook always think about wht input and output - 


-----------
how decress the size of -
becouse at end of all file bundle in one file  - and in production zip it but still it it in big files.

solution of this is make small build file  (creaate seprate bundle )
- chunking
- code spliting-
- lazy loading
- dynamic bundling
- on demand loading


-----------------------
css -- 
if u want to give a specific - size
then given in array 
example - w[]


