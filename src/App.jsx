import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import CommentArea from "./components/CommentArea";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";

function App() {
	return (
		<div className="App">
			<MyNav brand="ReactLibrary" />
			<Welcome alertText="Benvenuto in ReactLibrary" />
			<CommentArea />
			<AllBooks />
			<MyFooter footerText="ReactLibrary footer" />
		</div>
	);
}

export default App;
