# react-practice

#Parcel - > #babel(transpile the code (js complier))
#babel work to combine in code in react code

#JSX
JSX is html like syntax 
if u give attribute to jsx give in camel case


// import and export 
there are two types 
default and name .


#React Hook 
- reack hooks are utils,'
- we can saythat they are functions.
- useState() - SupemPoweer State variable in react
- useEffect() 






userState- 
- when ever state varaible update react re- render the component.

-----------

Reconsilation algo / react fibe
- diff - algo - find the differnec e between actual dom and virtual dom.

-  when any state update then whole comopnent call again -------- this is reconcialiation .
using diff only that specific part change not all other change.

// use effect 
- when useEffect caled?
in every time after render the component .

useEffect(() =>{},[]) 
- two components
 - one is callback (neccesarry )
 - dependency Array (optional)
 there are three case of useEffect  when its called 
  - one is if no dependencies
  example - 
  useEffect(()=>{})
  this is called in every time after render the component

  secound -
  useEffect(() =>{},[])
  this is called at onece after render the component 

  third -
  useEffect(() =>{},[value])
   this is will called after the dependencies value is changed


