import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './stores';

export const store = createStore(rootReducer, composeWithDevTools());
