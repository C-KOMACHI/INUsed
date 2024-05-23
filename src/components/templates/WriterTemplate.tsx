import { type FC, useRef } from 'react';
import { Stack, Box, Button as CategoryButton } from '@mui/material';
import { useFlow } from '@/stackflow';
import { Icon, Text, Input, Button } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { useCreatePost } from '@/hooks/apis/post-query';
import { COLOR } from '@/constants';

const style = {
    button: {
        borderRadius: '30px',
        background: COLOR.blue.button,
        '&:hover': {
            background: COLOR.blue.hover,
        },
        height: '45px',
        width: '120px',
    },
};

export const WriterTemplate: FC = () => {
    const imageUrl = 'hoshi.jpg';
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const categoryId = 13;

    const { mutate: writerMutate } = useCreatePost();
    const { push } = useFlow();

    const postHandleClick = () => {
        writerMutate({
            imageUrl,
            title: titleRef.current?.value ?? '',
            content: contentRef.current?.value ?? '',
            price: Number(priceRef.current?.value ?? ''),
            tag: tagRef.current?.value ?? '',
            categoryId,
        });
        push('Main', {});
    };

    const categoryHandleClick = () => {
        push('Kategorie', {});
    };

    return (
        <AppScreen header borderRadius title="상품 등록" backIcon>
            <Stack sx={{ pt: 2.5, px: 1, pb: 2 }} spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                        sx={{ width: '60px', height: '60px', border: '1px solid gray', borderRadius: 4 }}
                    >
                        <Icon src="./icons/Camera.png" gray />
                    </Box>

                    <Box
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                        sx={{ width: '60px', height: '60px', border: '1px solid gray', borderRadius: 4 }}
                    >
                        <Icon src={imageUrl} medium />
                    </Box>
                </Stack>

                <Box>
                    <Text type="medium">제목</Text>
                    <Input id="title" placeholder="제목을 입력해주세요." ref={titleRef} />
                </Box>

                <Box>
                    <Text type="medium">가격</Text>
                    <Input id="price" placeholder="가격을 입력해주세요." ref={priceRef} />
                </Box>

                <Box>
                    <Text type="medium">내용</Text>
                    <Input
                        id="text"
                        big
                        placeholder="상품의 상태 등 쾌적한 거래를 위해 상세히 작성해 주세요."
                        ref={contentRef}
                    />
                </Box>

                <Box>
                    <Text type="medium">카테고리</Text>
                    <CategoryButton size="small" sx={style.button} variant="contained" onClick={categoryHandleClick}>
                        카테고리
                    </CategoryButton>
                </Box>

                <Box>
                    <Text type="medium">태그</Text>
                    <Input placeholder="#태그1 #태그2" ref={tagRef} />
                </Box>

                <Button onClick={postHandleClick}>상품 등록하기</Button>
            </Stack>
        </AppScreen>
    );
};
