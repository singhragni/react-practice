import {useRouteError} from 'react-router' 

const Error = () =>{

    const err = useRouteError();
    console.log(err);  // Log error for debugging
    return (
        <div>
            <h1>404 error </h1>
        </div>
    )
}


export default Error;