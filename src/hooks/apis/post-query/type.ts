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

export interface Resource {
    file: string;
}

export interface ResourceResponse {
    code: string;
    message: string;
    key: string;
    path: string;
}
