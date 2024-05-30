import { type FC, useRef, useState, useEffect } from 'react';
import { useDropzone, type DropzoneRootProps, type DropzoneInputProps } from 'react-dropzone';
import { Stack, Box, Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import { useFlow } from '@/stackflow';
import { Icon, Text, Input, Button } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { useCreatePost, useUploadImage } from '@/hooks/apis/post-query';
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
        color: 'white',
    },
};

export const WriterTemplate: FC = () => {
    const [file, setFile] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const [categoryId, setCategoryId] = useState(1);

    const { mutate: writerMutate } = useCreatePost();
    const { mutate: uploadImageMutate } = useUploadImage();
    const { push } = useFlow();

    useEffect(() => {
        if (file) {
            setImageUrl(file);
        }
    }, [file]);

    const postHandleClick = () => {
        if (file) {
            uploadImageMutate({ file });
        }
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

    const handleChange = (event: SelectChangeEvent) => {
        setCategoryId(Number(event.target.value));
    };

    const onDrop = (acceptedFiles: File[]) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            setFile(result);
        };
        reader.readAsDataURL(acceptedFiles[0]);
    };

    const renderDropzone = ({
        getRootProps,
        getInputProps,
    }: {
        getRootProps: () => DropzoneRootProps;
        getInputProps: () => DropzoneInputProps;
    }) => {
        const inputProps = getInputProps();
        return (
            <Box
                onClick={getRootProps().onClick}
                onDragEnter={getRootProps().onDragEnter}
                onDragLeave={getRootProps().onDragLeave}
                onDragOver={getRootProps().onDragOver}
                onDrop={getRootProps().onDrop}
                tabIndex={getRootProps().tabIndex}
                aria-labelledby={getRootProps()['aria-labelledby']}
                alignItems="center"
                justifyContent="center"
                display="flex"
                sx={{
                    width: '60px',
                    height: '60px',
                    border: '1px solid gray',
                    borderRadius: 4,
                    cursor: 'pointer',
                }}
            >
                <input
                    onClick={inputProps.onClick}
                    onChange={inputProps.onChange}
                    onBlur={inputProps.onBlur}
                    onFocus={inputProps.onFocus}
                    type={inputProps.type}
                    name={inputProps.name}
                    accept={inputProps.accept}
                    multiple={inputProps.multiple}
                    disabled={inputProps.disabled}
                    className={inputProps.className}
                    style={inputProps.style}
                />
                {imageUrl ? <Icon src={imageUrl} medium /> : <Icon src="./icons/Camera.png" gray />}
            </Box>
        );
    };

    return (
        <AppScreen header borderRadius title="상품 등록" backIcon>
            <Stack sx={{ pt: 2.5, px: 1, pb: 2 }} spacing={2}>
                <Stack direction="row" spacing={2}>
                    {renderDropzone(useDropzone({ onDrop }))}
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
                    <Select value={categoryId.toString()} label="카테고리" onChange={handleChange} sx={style.button}>
                        <MenuItem value={1}>남성 의류</MenuItem>
                        <MenuItem value={2}>여성 의류</MenuItem>
                        <MenuItem value={3}>뷰티&미용</MenuItem>
                        <MenuItem value={4}>도서</MenuItem>
                        <MenuItem value={5}>패션잡화</MenuItem>
                        <MenuItem value={6}>티켓&교환권</MenuItem>
                        <MenuItem value={7}>가구&인테리어</MenuItem>
                        <MenuItem value={8}>디지털 기기</MenuItem>
                        <MenuItem value={9}>생활 가전</MenuItem>
                        <MenuItem value={10}>스포츠&레저</MenuItem>
                        <MenuItem value={11}>취미&게임&음반</MenuItem>
                        <MenuItem value={12}>가공 식품</MenuItem>
                        <MenuItem value={13}>식물</MenuItem>
                        <MenuItem value={14}>반려동물 용품</MenuItem>
                        <MenuItem value={15}>기타</MenuItem>
                    </Select>
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
