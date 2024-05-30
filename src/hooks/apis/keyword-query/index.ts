import type { KeywordCreate } from './type';
import { useQuery, useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { KeywordRepository } from './repository';

const queryKeys = {
    all: ['keyword'],
    getKeywordPost() {
        return [...this.all];
    },
};

export const useCheckNickname = (enabled: boolean) => {
    return useQuery({
        queryKey: queryKeys.getKeywordPost(),
        queryFn: () => KeywordRepository.getKeywordPost(),
        ...QUERY_OPTIONS,
        enabled,
    });
};
export const useCreateKeyword = () => {
    return useMutation({
        mutationKey: queryKeys.all,
        mutationFn: ({ keyword }: KeywordCreate) => KeywordRepository.createKeyword(keyword),
        ...QUERY_OPTIONS,
    });
};
