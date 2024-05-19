import type { MailAuthCodeResponse, MailResponse } from './type';
import { axios } from '@/utils';

export class MailRepository {
    public static async sendEmail(email: string) {
        const result = await axios.post<MailResponse>('/api/v1/emails/verification-requests', {
            email,
        });
        return result;
    }

    public static async checkAuthCode(email: string, authCode: string) {
        const result = await axios.get<MailAuthCodeResponse>('/api/v1/emails/verifications', {
            params: {
                email,
                authCode,
            },
        });
        return result;
    }
}
