import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { sampleSlice } from './slices/sample.slice';
import { listenerMiddleware } from './store.listener';

export const store = configureStore({
  reducer: {
    sample: sampleSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

setupListeners(store.dispatch);
