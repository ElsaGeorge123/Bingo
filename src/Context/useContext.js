
import { useState } from "react";

export const useContextData = () => {

    const [occassion, setoccassion] = useState(localStorage.getItem('occassion'))

	return {
        occassion,
        setoccassion,

	};
};
