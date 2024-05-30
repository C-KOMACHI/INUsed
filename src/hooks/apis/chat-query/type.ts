export interface Room {
    userId: number;
    postId: number;
}

interface Sender {
    id: number;
    email: string;
    nickname: string;
    password: string;
    profileImage: string;
    fireTemperature: number;
    authority: string;
    createdAt: string;
    updatedAt: string;
}

interface Receiver {
    id: number;
    email: string;
    nickname: string;
    password: string;
    profileImage: string;
    fireTemperature: number;
    authority: string;
    createdAt: string;
    updatedAt: string;
}

interface User {
    id: number;
    email: string;
    nickname: string;
    password: string;
    profileImage: string;
    fireTemperature: string;
    authority: string;
    createdAt: string;
    updatedAt: string;
}

interface Category {
    id: number;
    name: string;
    image: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    price: number;
    imageUrl: string;
    tag: string;
    wishCount: number;
    viewCount: number;
    productState: string;
    createdAt: string;
    updatedAt: string;
    lastReposting: string;
    user: User[];
    category: Category[];
    createAt: string;
    lastModifiedTime: string;
}

export interface RoomResponse {
    id: number;
    sender: Sender[];
    receiver: Receiver[];
    post: Post[];
}

export interface UserResponse {
    nickname: string;
    token: string;
}

export interface ChatRooms {
    id: number;
    sender: Sender[];
    receiver: Receiver[];
    post: Post[];
}

export interface RoomId {
    roomId: number;
}

export interface ChatRoom {
    id: number;
    sender: Sender[];
    receiver: Receiver[];
    post: Post[];
}

export interface RoomIdResponse {
    code: string;
    message: string;
    chatRoom: ChatRoom[];
}
