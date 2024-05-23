import { type FC, useRef, useState } from 'react';
import { Stack, Button, Typography, Chip } from '@mui/material';
import { Input } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { COLOR } from '@/constants';
import { useCreateKeyword } from '@/hooks/apis/keyword-query';

const style = {
    button: {
        position: 'absolute',
        borderRadius: '40px',
        background: COLOR.blue.button,
        '&:hover': {
            background: COLOR.blue.hover,
        },
        height: '48px',
        width: '90px',
        right: 0,
    },
};

interface Keyword {
    id: string;
    text: string;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const KeywordTemplate: FC = () => {
    const keywordRef = useRef<HTMLInputElement>(null);
    const [keywords, setKeywords] = useState<Keyword[]>([]);
    const [keywordNumber, setKeywordNumber] = useState(0);

    const { mutate: keywordMutate } = useCreateKeyword();

    const keywordHandleClick = () => {
        keywordMutate({
            keyword: keywordRef.current?.value ?? '',
        });

        if (keywordRef.current && keywordRef.current.value.trim() !== '') {
            const newKeyword: Keyword = { id: generateId(), text: keywordRef.current.value.trim() };
            setKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
            keywordRef.current.value = '';

            setKeywordNumber((prevNumber) => Math.min(prevNumber + 1, 10));
        }
    };

    const handleDelete = (id: string) => {
        setKeywords((prevKeywords) => prevKeywords.filter((keyword) => keyword.id !== id));
        setKeywordNumber((prevNumber) => Math.max(prevNumber - 1, 0));
    };

    return (
        <AppScreen header title="키워드 알림 등록" backIcon borderRadius>
            <Stack pt={5} spacing={3}>
                <Stack direction="row" position="relative">
                    <Input placeholder="키워드를 입력해주세요." keyword ref={keywordRef} />
                    <Button size="small" sx={style.button} variant="contained" onClick={keywordHandleClick}>
                        등록하기
                    </Button>
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography sx={{ paddingLeft: '15px' }}>등록한 키워드</Typography>
                    <Typography sx={{ color: 'gray', fontSize: '14px' }}>{keywordNumber}/10</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ paddingLeft: '10px', flexWrap: 'wrap' }}>
                    {keywords.map((keyword) => (
                        <Chip key={keyword.id} label={keyword.text} onDelete={() => handleDelete(keyword.id)} />
                    ))}
                </Stack>
            </Stack>
        </AppScreen>
    );
};
