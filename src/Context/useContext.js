
import { useState } from "react";

export const useContextData = () => {

    const [occassion, setoccassion] = useState()
    const [isOpen, setIsOpen] = useState(false);

	return {
        occassion,
        setoccassion,
        isOpen,
        setIsOpen,
	};
};
