import { applyMiddleware } from 'redux';

import apiMiddleware from './api';
import logMiddleware from './log';

export default applyMiddleware(apiMiddleware, logMiddleware);
