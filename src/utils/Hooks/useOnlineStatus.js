import { useState } from "react";

const useOnlineStatus = () => {

    const [online, setOnline] = useState(true);

    addEventListener("online", (event) => { 
        setOnline(true);
    })

    addEventListener("offline", (event) => { 
        setOnline(false)
    })

    return online;

}

export default useOnlineStatus;