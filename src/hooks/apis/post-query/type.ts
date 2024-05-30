export interface PostCreate {
    title: string;
    content: string;
    imageUrl: string;
    tag: string;
    price: number;
    categoryId: number;
}

export interface PostCreateResponse {
    code: string;
    message: string;
}
