import { createContext } from "react";

const GlobalContext = createContext({
	theme: "",
	setTheme: () => {},
});

export default GlobalContext;
