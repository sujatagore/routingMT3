

export interface Iproducts{
    pid: string;
    pname: string;
    pstatus: 'Delivered' | 'Dispatched' | 'In Progress';
    canReturn: number;
    productDescription: string;
    price: number;
    brand: string;
    rating: number;
    images: string;
}