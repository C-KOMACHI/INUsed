import { useQuery, useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { AuthRepository } from './repository';

const queryKeys = {
    all: ['nickname'],
    checkNickname(nickname: string) {
        return [...this.all, nickname];
    },
    register(email: string, nickname: string, password: string) {
        return [...this.all, email, nickname, password];
    },
};

export const useCheckNickname = (nickname: string, enabled: boolean) => {
    return useQuery({
        queryKey: queryKeys.checkNickname(nickname),
        queryFn: () => AuthRepository.checkNickname(nickname),
        ...QUERY_OPTIONS,
        enabled,
    });
};

export const useRegister = (email: string, nickname: string, password: string) => {
    return useMutation({
        mutationKey: queryKeys.register(email, nickname, password),
        mutationFn: () => AuthRepository.register(email, nickname, password),
        ...QUERY_OPTIONS,
    });
};
