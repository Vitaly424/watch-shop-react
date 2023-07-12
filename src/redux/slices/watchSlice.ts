import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from "../store";

interface Watch {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    types: number[];
    sizes: number[];
    rating?: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'sucess',
    ERROR = 'error',
}

interface WatchSliceState {
    items: Watch[];
    status: Status;
}

const initialState:WatchSliceState  = {
    items: [],
    status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<Watch[], Record<string, string>>(
    'watch/fetchWatchStatus',
    async (params) => {
        const { category, sort, search } = params;

        const { data } = await axios.get<Watch[]>(`${process.env.REACT_APP_BASE_URL}?${category}${sort}${search}`);
        return data;
    },
);


export const pizzaSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Watch[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state, action) => {
                state.items = [];
                state.status = Status.LOADING;
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.items = [];
                state.status = Status.ERROR;
            });
    },
});

export const selectWatchData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
