import type { FC } from 'react';
import { Stack, Divider } from '@mui/material';
import { Text } from '@/components/atoms';
import { AppScreen, ReportList } from '@/components/organisms';

const reports = [
    { id: 1, title: '욕설,비방,혐오 표현을 해요' },
    { id: 2, title: '사기인 것 같아요' },
    { id: 3, title: '연애 목적의 대화를 시도해요' },
    { id: 4, title: '거래 중 분쟁이 발생했어요' },
    { id: 5, title: '기타 다른 문제가 있어요' },
];

export const ReportTemplate: FC = () => {
    return (
        <AppScreen bottomNavigation writeButton header borderRadius title="사용자 신고">
            <Stack spacing={2} sx={{ pl: '5px' }}>
                <Stack sx={{ pt: '20px' }}>
                    <Text type="medium">
                        &lsquo;진유리&rsquo;
                        <br />
                        사용자를 신고하려는 이유를 선택해 주세요
                    </Text>
                </Stack>
                <Divider />
                <ReportList reports={reports} />
            </Stack>
        </AppScreen>
    );
};
