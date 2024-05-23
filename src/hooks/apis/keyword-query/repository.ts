import type { KeywordCreateResponse } from './type';
import { axios } from '@/utils';

export class KeywordRepository {
    public static async createKeyword(keyword: string) {
        const result = await axios.post<KeywordCreateResponse>('/api/v1/keyword/create', {
            keyword,
        });
        return result;
    }
}
