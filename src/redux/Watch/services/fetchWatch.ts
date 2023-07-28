import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWatch } from "../types/watch";

export const fetchWatch = createAsyncThunk<IWatch[], Record<string, string>, { rejectValue: string }>(
    'watch/fetchWatchStatus',
    async (params, thunkAPI) => {
        const { category, sort, search } = params;

        try {
            const { data } = await axios.get<IWatch[]>(`${process.env.REACT_APP_BASE_URL}?${category}${sort}${search}`);
            return data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
