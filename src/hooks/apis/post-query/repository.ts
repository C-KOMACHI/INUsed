import type { PostCreateResponse } from './type';
import { axios } from '@/utils';

export class PostRepository {
    public static async createPost(
        title: string,
        content: string,
        imageUrl: string,
        tag: string,
        price: number,
        categoryId: number,
    ) {
        const result = await axios.post<PostCreateResponse>('/api/v1/posts/create', {
            title,
            content,
            imageUrl,
            tag,
            price,
            categoryId,
        });
        return result;
    }
}
