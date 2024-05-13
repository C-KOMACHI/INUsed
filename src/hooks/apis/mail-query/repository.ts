import type { MailAuthCodeResponse, MailResponse } from './type';
import { axios } from '@/utils';

export class MailRepository {
    public static async sendEmail(email: string) {
        try {
            const res = await axios.post<MailResponse>('/emails/verification-requests', {
                email,
            });

            if (res.status === 200) {
                return res;
            }
            throw new Error('서버 요청이 실패했습니다.');
        } catch (error) {
            throw new Error('서버와의 통신 중 오류가 발생했습니다.');
        }
    }

    public static async checkAuthCode(email: string, authCode: string) {
        try {
            const res = await axios.get<MailAuthCodeResponse>('/emails/verifications', {
                params: {
                    email,
                    authCode,
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
}
