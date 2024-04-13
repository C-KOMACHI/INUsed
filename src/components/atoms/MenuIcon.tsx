import { type FC, useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { MoreVert as Icon } from '@mui/icons-material';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

interface Props {
    myPost?: boolean;
}

const style = {
    button: {
        position: 'absolute',
        top: 11,
        right: 10,
        color: COLOR.white.main,
        cursor: 'pointer',
    },
    icon: {
        fontSize: '32px',
    },
};

export const MenuIcon: FC<Props> = ({ myPost }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const { push } = useFlow();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const handleReportClick = () => {
        handleClose();
        push('Report', {});
    };

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={style.button}
            >
                <Icon sx={style.icon} />
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {myPost
                    ? [
                          <MenuItem key="edit" onClick={handleClose}>
                              수정
                          </MenuItem>,
                          <MenuItem key="delete" onClick={handleClose}>
                              삭제
                          </MenuItem>,
                          <MenuItem key="register" onClick={handleClose}>
                              최신글로 등록
                          </MenuItem>,
                      ]
                    : [
                          <MenuItem key="report" onClick={handleReportClick}>
                              신고하기
                          </MenuItem>,
                          <MenuItem key="copyUrl" onClick={handleClose}>
                              URL 복사
                          </MenuItem>,
                      ]}
            </Menu>
        </>
    );
};
