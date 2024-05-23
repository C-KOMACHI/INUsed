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

type ArticleParams = {
    id: number;
};

export const UserPage: ActivityComponentType<ArticleParams> = ({params}) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/user/get/${params.id}`, {
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
    }, [params.id]);
    return (
        <Suspense>
            <MyPageTemplate id={params.id} user={user} title={`${user?.nickname} 프로필`}/>
        </Suspense>
    );
};
