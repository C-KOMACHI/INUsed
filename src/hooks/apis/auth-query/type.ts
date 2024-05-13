export interface Register {
    email: string;
    nickname: string;
    password: string;
}

export interface RegisterResponse {
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

export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    code: string;
    message: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: 0;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
}

export interface TokenResponse {
    code: string;
    message: string;
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: 0;
}

export interface FindPassword {
    email: string;
    password: string;
}

export interface FindPasswordResponse {
    code: string;
    message: string;
}

export interface Logout {
    accessToken: string;
    refreshToken: string;
}
