import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string | number;
  register?: UseFormRegisterReturn;
}

export const Textarea = ({
  width = '100%',
  register,
  ...props
}: TextareaProps) => {
  return (
    <Wrapper width={width}>
      <Container {...register} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div<TextareaProps>`
  width: ${({ width }) =>
    width && typeof width === 'string' ? width : `${width}px`};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.mono[200]};
  border-radius: 8px;
  transition-property: border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary[500]}; // 원하는 색상으로 변경
  }
`;

const Container = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  appearance: none;
  font-size: 16px;
  line-height: 150%;
  resize: none;
  color: ${({ theme }) => theme.colors.mono.black};
  outline: 0 !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
