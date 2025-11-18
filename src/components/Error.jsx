
import { use } from "react";
import { useRouteError } from "react-router-dom";

const Error = ( ) => {

    const err = useRouteError();
    console.log("Error: ",err);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <h2>{err.status + ": " + err.statusText}</h2>
        </div>
    )
}

export default Error;