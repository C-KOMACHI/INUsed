import type { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { NoticeTemplate } from '@/components/templates';

type Notice = {
    id: number;
    title: string;
    createdAt: string;
    content: string;
};

interface ApiResponse {
    code: string;
    message: string;
    notices: Notice[];
}

export const Notice: ActivityComponentType = () => {
    const [notices, setNotices] = useState<Notice[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>('https://api.inused.store/api/v1/notice', {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setNotices(response.data.notices);
                })
                .catch(() => {});
        };
        fetchPosts();
    }, []);

    return (
        <Suspense>
            <NoticeTemplate notices={notices} />
        </Suspense>
    );
};
