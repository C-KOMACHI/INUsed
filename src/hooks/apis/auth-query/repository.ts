import type {
    CheckNicknameResponse,
    LoginResponse,
    RegisterResponse,
    ReissueResponse,
    LogoutResponse,
    PasswordFindResponse,
} from './type';
import { axios } from '@/utils';

export class AuthRepository {
    public static async checkNickname(nickname: string) {
        const result = await axios.get<CheckNicknameResponse>('/api/v1/auth/nickname-check', {
            params: {
                nickname,
            },
        });
        return result;
    }

    public static async register(email: string, nickname: string, password: string) {
        const result = await axios.post<RegisterResponse>('/api/v1/auth/register', {
            email,
            nickname,
            password,
        });

        return result;
    }

    public static async reissue(accessToken: string, refreshToken: string) {
        const result = await axios.patch<ReissueResponse>('/api/v1/auth/reissue', {
            accessToken,
            refreshToken,
        });
        return result;
    }

    public static async login(email: string, password: string) {
        const result = await axios.post<LoginResponse>('/api/v1/auth/login', {
            email,
            password,
        });
        return result;
    }

    public static async PasswordFind(email: string, password: string) {
        const result = await axios.patch<PasswordFindResponse>('/api/v1/auth/password-find', {
            email,
            password,
        });
        return result;
    }

    public static async logout(accessToken: string, refreshToken: string) {
        const result = await axios.patch<LogoutResponse>('/api/v1/auth/logout', {
            accessToken,
            refreshToken,
        });
        return result;
    }
}
