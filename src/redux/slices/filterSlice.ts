import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from "../store";

export enum SortProperty {
    RATING = 'rating',
    PRICE = 'price',
    TITLE ='title',
}

export interface ISort {
    name: string;
    sortProperty: SortProperty;
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    sortType: ISort
}

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sortType: {
        name: 'популярности',
        sortProperty: SortProperty.RATING,
    },
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortType(state, action: PayloadAction<ISort>) {
            state.sortType = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.sortType = action.payload.sortType;
            state.categoryId = action.payload.categoryId;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
    },
});

export const selectFilter = (state: RootState) => state.filter;

export const {
    setCategoryId, setSortType, setFilters, setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
