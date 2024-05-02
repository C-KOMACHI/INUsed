import { useQuery, useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { MailRepository } from './repository';

const queryKeys = {
    all: ['email'],
    sendEmail(email: string) {
        return [...this.all, email];
    },
    checkAuthCode(email: string, authCode: string) {
        return [...this.all, email, authCode];
    },
};

export const useSendEmail = (email: string) => {
    return useMutation({
        mutationKey: queryKeys.sendEmail(email),
        mutationFn: () => MailRepository.sendEmail(email),
        ...QUERY_OPTIONS,
    });
};

export const useCheckAuthCode = (email: string, authCode: string, enabled: boolean) => {
    return useQuery({
        queryKey: queryKeys.checkAuthCode(email, authCode),
        queryFn: () => MailRepository.checkAuthCode(email, authCode),
        ...QUERY_OPTIONS,
        enabled,
    });
};
