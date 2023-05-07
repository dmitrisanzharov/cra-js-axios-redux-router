import { createContext, useContext, useMemo } from "react";

const AppContext = createContext(null);

export const UseContext = ({ children }) => {
	// ! to ACCESS values, I need to wrap CHILD components with <UseContext></UseContext>  i.e. this is the <AppProvider></AppProvider> from notes
	// ! see  useContext Sample Use   page to see in operation

	function contextConsoleLog() {
		console.log("contextConsoleLog");
	}

	const contextValues = {
		contextConsoleLog: contextConsoleLog,
		name: "omgName",
	};

	return (
		<AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
	);
};

export const useGlobal = () => {
	return useContext(AppContext);
};

export default UseContext;
