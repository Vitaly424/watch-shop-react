import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WatchSchema, Status, IWatch } from '../types/watch';
import { fetchWatch } from '../services/fetchWatch'

const initialState: WatchSchema  = {
    items: [],
    status: Status.LOADING,
};

export const watchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<IWatch[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWatch.pending, (state, action) => {
                state.items = [];
                state.status = Status.LOADING;
            })
            .addCase(fetchWatch.fulfilled, (state, action: PayloadAction<IWatch[]>) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchWatch.rejected, (state, action) => {
                state.items = [];
                state.status = Status.ERROR;
            });
    },
});

export const { actions: watchAction } = watchSlice;
export const { reducer: watchReducer } = watchSlice;
