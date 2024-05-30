export interface KeywordCreate {
    keyword: string;
}

export interface KeywordCreateResponse {
    code: string;
    message: string;
}

interface User {
    id: number;
    email: string;
    nickname: string;
    profileImage: string;
    fireTemperature: number;
}

interface KeywordInfos {
    keywordId: number;
    keyword: string;
    user: User[];
}

export interface KeywordResponse {
    code: string;
    message: string;
    keywordInfos: KeywordInfos[];
}

export interface KeywordGetpost {
    code: string;
    message: string;
    keywordInfos: KeywordInfos;
}
