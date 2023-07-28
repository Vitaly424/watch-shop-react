import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSchema, ISort, SortProperty } from "../types/filter";

const initialState: FilterSchema = {
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
        setCategoryId(state, action: PayloadAction<{ id: number }>) {
            state.categoryId = action.payload.id;
        },
        setSortType(state, action: PayloadAction<ISort>) {
            state.sortType = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSchema>) {
            state.sortType = action.payload.sortType;
            state.categoryId = action.payload.categoryId;
        },
        setSearchValue(state, action: PayloadAction<{ value: string }>) {
            state.searchValue = action.payload.value;
        },
    },
});

export const { actions: filterAction } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
