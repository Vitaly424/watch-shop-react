export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface IWatch {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    types: number[];
    sizes: number[];
    rating?: number;
}

export interface WatchSchema {
    items: IWatch[];
    status: Status;
}
