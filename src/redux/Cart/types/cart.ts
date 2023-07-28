export interface ICart {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    count: number;
}

export interface CartSchema {
    totalPrice: number;
    items: ICart[];
}
