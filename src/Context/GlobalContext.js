import { createContext } from "react";

const GlobalContext = createContext({
	occassion: "",
	setoccassion: () => {},
	isOpen: false,
	setIsOpen:  () => {},
});

export default GlobalContext;
