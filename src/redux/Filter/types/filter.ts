export enum SortProperty {
    RATING = 'rating',
    PRICE = 'price',
    TITLE ='title',
}

export interface ISort {
    name: string;
    sortProperty: SortProperty;
}

export interface FilterSchema {
    searchValue: string;
    categoryId: number;
    sortType: ISort
}
