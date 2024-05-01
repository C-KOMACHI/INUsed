export interface Register {
    email: string;
    nickname: string;
    password: string;
}

export interface RegisterResponse {
    code: string;
    message: string;
}

export interface CheckEmail {
    isEmailTaken: boolean;
}

export interface CheckEmailResponse {
    code: string;
    message: string;
}

export interface CheckNickname {
    nickname: string;
}

export interface CheckNicknameResponse {
    code: string;
    message: string;
}
