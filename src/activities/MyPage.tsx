import type { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { MyPageTemplate } from '@/components/templates';

type User = {
    id: number;
    email: string;
    nickname: string;
    profileImage: string;
    fireTemperature: number;
};

interface ApiResponse {
    code: string;
    message: string;
    user: User;
}

export const MyPage: ActivityComponentType = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/user/get`, {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setUser(response.data.user);
                })
                .catch(() => {});
        };
        fetchPosts();
    }, []);

    return (
        <Suspense>
            <MyPageTemplate user={user} title='내 프로필'/>
        </Suspense>
    );
};
