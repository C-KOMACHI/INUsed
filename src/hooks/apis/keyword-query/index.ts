import type { KeywordCreate } from './type';
import { useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { KeywordRepository } from './repository';

const queryKeys = {
    all: ['keyword'],
};

export const useCreateKeyword = () => {
    return useMutation({
        mutationKey: queryKeys.all,
        mutationFn: ({ keyword }: KeywordCreate) => KeywordRepository.createKeyword(keyword),
        ...QUERY_OPTIONS,
    });
};
