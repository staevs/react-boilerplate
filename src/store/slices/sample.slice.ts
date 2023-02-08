import { createSlice } from '@reduxjs/toolkit';

import { type SampleSliceState } from '~/store/slices/sample.types';

const getInitialState = (): SampleSliceState => ({
  sample: 'Sample'
});

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: getInitialState(),
  reducers: {
    resetSlice(state) {
      const initialState = getInitialState();

      (Object.keys(initialState) as (keyof SampleSliceState)[]).forEach(
        (key) => {
          const initialValue = initialState[key];

          state[key] = initialValue;
        }
      );
    }
  }
});
