import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import { searchImages } from './api';

searchImages();

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
