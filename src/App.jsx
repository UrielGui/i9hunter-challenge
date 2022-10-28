import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import States from './GlobalStates/States';

export default function App() {
	return (
		<States>
			<Header />
			<SearchResults />
		</States>
	);
}
