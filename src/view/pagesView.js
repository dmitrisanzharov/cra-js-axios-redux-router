import UseStateAndUseEffect from "../pages/UseStateAndUseEffect";
import UseMemoAndUseCallback from "../pages/UseMemoAndUseCallback";
import UseReducer from "../pages/UseReducer";
import UseContext from "../pages/UseContext";
import UseContextSampleUse from "../pages/UseContextSampleUse";
import ClassComponentsAndProps from "../pages/ClassComponentsAndProps";
import UseRef from "../pages/UseRef";
import ReduxSample from "../pages/ReduxSample";
import CreateApiSample from '../pages/CreateApiSample';

const pagesView = [
	{
		id: 1,
		url: "/usestate-and-useeffect",
		text: "useState and useEffect",
		component: <UseStateAndUseEffect />,
	},
	{
		id: 2,
		url: "/usememo-and-usecallback",
		text: "useMemo and useCallback",
		component: <UseMemoAndUseCallback />,
	},
	{
		id: 3,
		url: "/usereducer",
		text: "useReducer",
		component: <UseReducer />,
	},
	{
		id: 4,
		url: "/usecontext",
		text: "useContext",
		component: <UseContextSampleUse />,
	},
	{
		id: 5,
		url: "/classcomponents-and-props",
		text: "class components and props",
		component: <ClassComponentsAndProps />,
	},
	{
		id: 6,
		url: "/useref",
		text: "useRef",
		component: <UseRef />,
	},
	{
		id: 7,
		url: "/redux-sample",
		text: "redux sample",
		component: <ReduxSample />,
	},
	{
		id: 8,
		url: "/redux-create-api-sample",
		text: "redux create api sample, react query sample",
		component: <CreateApiSample />,
	},
];
export default pagesView;
