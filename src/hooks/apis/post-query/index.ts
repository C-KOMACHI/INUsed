import type { PostCreate } from './type';
import { useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { PostRepository } from './repository';

const queryKeys = {
    all: ['post'],
};

export const useCreatePost = () => {
    return useMutation({
        mutationKey: queryKeys.all,
        mutationFn: ({ title, content, imageUrl, tag, price, categoryId }: PostCreate) =>
            PostRepository.createPost(title, content, imageUrl, tag, price, categoryId),
        ...QUERY_OPTIONS,
    });
};
