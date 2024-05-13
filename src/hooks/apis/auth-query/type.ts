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

export interface Reissue {
    accessToken: string;
    refreshToken: string;
}

export interface ReissueResponse {
    code: string;
    message: string;
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: 0;
}

export interface PasswordFind {
    email: string;
    password: string;
}

export interface PasswordFindResponse {
    code: string;
    message: string;
}

export interface Logout {
    accessToken: string;
    refreshToken: string;
}

export interface LogoutResponse {
    code: string;
    message: string;
}
