import { createContext } from "react";

const GlobalContext = createContext({
	occassion: "",
	setoccassion: () => {},

});

export default GlobalContext;
