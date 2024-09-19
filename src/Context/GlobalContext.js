import { createContext } from "react";

const GlobalContext = createContext({
	occassion: localStorage.getItem('occassion'),
	setoccassion: () => {},

});

export default GlobalContext;
