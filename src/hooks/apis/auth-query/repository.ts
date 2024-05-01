import type { RegisterResponse, CheckNicknameResponse } from './type';
import { axios } from '@/utils';

export class AuthRepository {
    public static checkNickname(nickname: string) {
        return axios.get<CheckNicknameResponse>('/auth/nickname-check', {
            params: {
                nickname,
            },
        });
    }

    public static register(email: string, nickname: string, password: string) {
        return axios.post<RegisterResponse>('/auth/register', {
            email,
            nickname,
            password,
        });
    }
}
