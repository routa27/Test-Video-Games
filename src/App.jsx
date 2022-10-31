import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/home/Home';
import './style.css';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				refetchOnWindowFocus: false,
				structuralSharing: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<h1>Rawg</h1>
			<Home />
		</QueryClientProvider>
	);
}

export default App;
