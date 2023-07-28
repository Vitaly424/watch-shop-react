import { ISort, SortProperty } from "@/redux/Filter";

export const sortList: ISort[] = [
    { name: 'популярности', sortProperty: SortProperty.RATING },
    { name: 'цене', sortProperty: SortProperty.PRICE },
    { name: 'алфавиту', sortProperty: SortProperty.TITLE },
];
