import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Icon, Text, Input, Button } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';

export const WriterTemplate: FC = () => {
    return (
        <AppScreen header borderRadius title="상품 등록">
            <Stack sx={{ pt: 2.5, px: 1, pb: 2 }} spacing={2}>
                <Box
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    sx={{ width: '60px', height: '60px', border: '1px solid gray', borderRadius: 4 }}
                >
                    <Icon src="./icons/Camera.png" gray />
                </Box>

                <Box>
                    <Text type="medium">제목</Text>
                    <Input placeholder="제목을 입력해주세요." />
                </Box>

                <Box>
                    <Text type="medium">가격</Text>
                    <Input placeholder="가격을 입력해주세요." />
                </Box>

                <Box>
                    <Text type="medium">내용</Text>
                    <Input big placeholder="상품의 상태 등 쾌적한 거래를 위해 상세히 작성해 주세요." />
                </Box>

                <Box>
                    <Text type="medium">카테고리</Text>
                    <Input placeholder="카테고리 >" />
                </Box>

                <Box>
                    <Text type="medium">태그</Text>
                    <Input placeholder="#태그1 #태그2" />
                </Box>

                <Button>상품 등록하기</Button>
            </Stack>
        </AppScreen>
    );
};
