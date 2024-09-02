import { useState } from "react";

export const useContextData = () => {
    // Network Status
    const [networkStatus, setNetworkStatus] = useState("offline");


    return {
        networkStatus,
        setNetworkStatus,
    };
};
