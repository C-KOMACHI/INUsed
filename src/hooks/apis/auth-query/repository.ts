import type { CheckNicknameResponse, RegisterResponse } from './type';
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
}
