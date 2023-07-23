import styled from '@emotion/styled';

export interface InputProps {
  designType?: 'default' | 'round' | 'mono';
  width?: string | number;
  height?: string | number;
  isError?: boolean;
  fontSize?: string | number;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width || '200px'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || '40px'};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize || '16px'};
  padding: 12px
    ${({ designType }) => (designType === 'default' ? '14px' : '20px')};

  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.error[500] : theme.colors.mono[200]};
  border-radius: ${({ designType }) =>
    designType === 'default' ? '8px' : '99px'};
  background-color: ${({ designType, theme }) =>
    designType === 'mono' ? theme.colors.mono[100] : theme.colors.mono.white};
  color: ${({ theme }) => theme.colors.mono.black};

  transition-property: border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono[300]};
  }

  &:focus {
    outline: 0 !important;
    border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  }

  &:placeholder-shown {
    border: ${({ designType, theme, isError }) =>
      isError
        ? `1px solid ${theme.colors.primary[500]}`
        : designType === 'mono'
        ? 0
        : `1px solid ${theme.colors.mono[200]}`};
    background-color: ${({ designType, theme }) =>
      designType === 'mono' ? theme.colors.mono[100] : theme.colors.mono.white};
  }
`;

Input.defaultProps = {
  designType: 'default',
};
