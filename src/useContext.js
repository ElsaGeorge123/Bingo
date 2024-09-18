
import { useState } from "react";

export const useContextData = () => {
	// Network Status
	const [networkStatus, setNetworkStatus] = useState("offline");

	// Loading State
	const [isLoading, setIsLoading] = useState(false);

	// Snack Bar component
	const [snack, setSnack] = useState({
		text: "Snackbar Message",
		bgColor: "var(--indigo)",
		color: "var(--white)",
	});
	const [openSnackBar, setOpenSnackBar] = useState(false);

	// Global Authentication State
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated) || false
	);

	// Global User State
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	// Events
	const [events, setEvents] = useState([]);

	// Notes
	const [notes, setNotes] = useState([]);
	const [lists, setLists] = useState([]);
	// Tasks
	const [tasks, setTasks] = useState([]);

	// Side Bar
	const [openSideBar, setOpenSideBar] = useState(false);
	const toggleSideBar = () => {
		setOpenSideBar((p) => !p);
	};

	// Theme: light || dark
    const [occassion, setoccassion] = useState()
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);
	const toggleTheme = () => {
		document.body.classList = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
		setTheme((p) => (p === "light" ? "dark" : "light"));
	};

	// Accent Color (Featured Update)
	const [accentColor, setAccentColor] = useState(
		localStorage.getItem("accentColor")
			? localStorage.getItem("accentColor")
			: "indigo"
	);

	// Media Breakpoints
	const mediaQuerySm = window.matchMedia("(max-width: 672px)");
	const mediaQueryMd = window.matchMedia("(max-width: 880px)");
	const mediaQueryLg = window.matchMedia("(min-width: 880px)");
	const breakpoint = (device) => {
		if (device === "mobile") return mediaQuerySm.matches;
		else if (device === "tab") return mediaQueryMd.matches;
		else return mediaQueryLg.matches;
	};

	return {
        occassion,
        setoccassion,
		theme,
		setTheme,
		toggleTheme,
		accentColor,
		setAccentColor,
		breakpoint,
		networkStatus,
		setNetworkStatus,
		isLoading,
		setIsLoading,
		snack,
		setSnack,
		openSnackBar,
		setOpenSnackBar,
		isAuthenticated,
		setIsAuthenticated,
		user,
		token,
		setUser,
		setToken,
		openSideBar,
		setOpenSideBar,
		toggleSideBar,
		events,
		setEvents,
		notes,
		setNotes,
		lists,
		setLists,
		tasks,
		setTasks,
	};
};
