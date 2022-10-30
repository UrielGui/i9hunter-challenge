import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import States from './GlobalStates/States';
import Modal from './Components/Modal';

export default function App() {
	return (
		<States>
			<Modal />
			<Header />
			<SearchResults />
		</States>
	);
}
