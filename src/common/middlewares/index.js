import apiMiddleware from './api';
import logMiddleware from './log';

import { applyMiddleware } from 'redux';

export default applyMiddleware(apiMiddleware, logMiddleware);
