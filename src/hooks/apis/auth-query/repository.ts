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
        try {
            const res = await axios.get<CheckNicknameResponse>('/auth/nickname-check', {
                params: {
                    nickname,
                },
            });

            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async register(email: string, nickname: string, password: string) {
        try {
            const res = await axios.post<RegisterResponse>('/auth/register', {
                email,
                nickname,
                password,
            });

            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async reissue(accessToken: string, refreshToken: string) {
        try {
            const res = await axios.patch<ReissueResponse>('/auth/reissue', {
                accessToken,
                refreshToken,
            });
            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async login(email: string, password: string) {
        try {
            const res = await axios.post<LoginResponse>('/auth/login', {
                email,
                password,
            });
            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async PasswordFind(email: string, password: string) {
        try {
            const res = await axios.patch<PasswordFindResponse>('/auth/password-find', {
                email,
                password,
            });
            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async logout(accessToken: string, refreshToken: string) {
        try {
            const res = await axios.patch<LogoutResponse>('/auth/logout', {
                accessToken,
                refreshToken,
            });
            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }
}
