export interface Mail {
    email: string;
}

export interface MailResponse {
    code: string;
    message: string;
}

export interface MailAuthCode {
    email: string;
    authCode: string;
}

export interface MailAuthCodeResponse {
    code: string;
    message: string;
}
