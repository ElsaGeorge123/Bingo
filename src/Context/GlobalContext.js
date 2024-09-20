import { createContext } from "react";

const GlobalContext = createContext({
	occassion: localStorage.getItem('occassion'),
	setoccassion: () => {},
	isOpen: false,
	setIsOpen:  () => {},
});

export default GlobalContext;
