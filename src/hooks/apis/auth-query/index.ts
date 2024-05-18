import type { Register } from './type';
import { useQuery, useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { AuthRepository } from './repository';

const queryKeys = {
    all: ['nickname'],
    checkNickname(nickname: string) {
        return [...this.all, nickname];
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

export const useRegister = () => {
    return useMutation({
        mutationKey: queryKeys.all,
        mutationFn: ({ email, nickname, password }: Register) => AuthRepository.register(email, nickname, password),
        ...QUERY_OPTIONS,
    });
};
