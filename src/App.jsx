import NotesProvider from "./context/NoteContext";
import NotesPage from "./pages/NotesPage";

const App = () => {
	return (
		<div id="app">
			<NotesProvider>
				<NotesPage />
			</NotesProvider>
		</div>
	);
};

export default App;
