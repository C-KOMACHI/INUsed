import type { Room } from './type';
import { useMutation } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { ChatRepository } from './repository';

const queryKeys = {
    all: ['chat'],
    userInformation() {
        return [...this.all];
    },
};

export const useChat = () => {
    return useMutation({
        mutationKey: queryKeys.all,
        mutationFn: ({ userId, postId }: Room) => ChatRepository.makeChatRoom(userId, postId),
        ...QUERY_OPTIONS,
    });
};
