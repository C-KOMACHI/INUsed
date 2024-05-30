import type { KeywordGetpost, KeywordCreateResponse } from './type';
import { axios } from '@/utils';

export class KeywordRepository {
    public static async createKeyword(keyword: string) {
        const result = await axios.post<KeywordCreateResponse>('/api/v1/keyword/create', {
            keyword,
        });
        return result;
    }

    public static async getKeywordPost() {
        const result = await axios.get<KeywordGetpost>('/api/vi/keyword/get-post');
        return result;
    }
}
