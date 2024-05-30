import type { RoomResponse, UserResponse } from './type';
import { axios } from '@/utils';

export class ChatRepository {
    public static async makeChatRoom(userId: number, postId: number) {
        const result = await axios.post<RoomResponse>('/api/v1/chat/room', {
            userId,
            postId,
        });
        return result;
    }

    public static async userInformation() {
        const result = await axios.get<UserResponse>('/api/v1/chat/user', {});
        return result;
    }
}
