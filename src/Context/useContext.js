
import { useState } from "react";

export const useContextData = () => {

    const [occassion, setoccassion] = useState()

	return {
        occassion,
        setoccassion,

	};
};
