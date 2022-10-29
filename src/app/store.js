import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { postingApi } from '../services/postingApi';

export const store = configureStore({
  reducer: {
    [postingApi.reducerPath]: postingApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postingApi.middleware),
});

setupListeners(store.dispatch);
