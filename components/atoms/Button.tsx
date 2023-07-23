import styled from '@emotion/styled';
import { SVGProps } from 'react';

interface ButtonProps extends ContainerProps {
  text: string;
  leftIcon?: SVGProps<SVGAElement>;
  rightIcon?: SVGProps<SVGAElement>;
}
interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 타입 */
  color?: 'primary' | 'default' | 'text' | 'line';
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 기본/둥근 버튼 구분 */
  isRound?: boolean;
  width?: string | number;
}
export const Button = ({
  text,
  color,
  size,
  isRound,
  leftIcon,
  rightIcon,
  width,
  ...props
}: ButtonProps) => {
  return (
    <Container
      color={color || 'default'}
      size={size || 'md'}
      isRound={isRound}
      width={width ?? 'fit-content'}
      {...props}
    >
      <>
        {/* 왼쪽 아이콘 */}
        {leftIcon && leftIcon}
        {/* 버튼 이름 */}
        <span>{text}</span>
        {/* 오른쪽 아이콘 */}
        {rightIcon && rightIcon}
      </>
    </Container>
  );
};
const Container = styled.button<ContainerProps>`
  display: flex;
  position: relative;
  width: ${({ width }) =>
    width && typeof width === 'string' ? width : `${width}px`};
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  gap: 4px;
  font-weight: 500;
  user-select: none;
  &:active {
    transform: scale(0.97);
  }
  ${({ isRound }) => (isRound ? isRoundList['true'] : isRoundList['false'])}
  ${({ color, theme }) =>
    color
      ? color === 'primary'
        ? `
          color: white;
          background: ${theme.colors.primary[500]};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.primary[400]};
            }
          }
          &:active {
            background: ${theme.colors.primary[400]};
          }`
        : color === 'default'
        ? `
          color: ${theme.colors.mono.black};
          border: 1px solid ${theme.colors.mono[200]};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`
        : color === 'line'
        ? `
        color: ${theme.colors.primary[500]};
            border: 1px solid ${theme.colors.primary[500]};
            background: ${theme.colors.mono.white};
            &:active {
              color: ${theme.colors.mono.white};
              background: ${theme.colors.primary[500]};
            }`
        : color === 'text' &&
          `
          color: ${theme.colors.mono.black};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`
      : `
          color: ${theme.colors.mono.black};
          border: 1px solid ${theme.colors.mono[200]};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`}
  ${({ size }) => size && sizeList[size]}
  ${({ size, color }) =>
    size === 'lg'
      ? `padding: 17px ${color === 'default' ? '19px' : '20px'};`
      : size === 'md'
      ? `padding: 10px ${color === 'default' ? '19px' : '20px'};`
      : size === 'sm' &&
        `padding: 8px ${color === 'default' ? '13px' : '14px'};`}
`;

const sizeList = {
  sm: `
    height: 32px;
    font-size: 14px;`,
  md: `
    height: 40px;
    font-size: 14px;`,
  lg: `
    height: 50px;
    font-size: 16px;`,
};

const isRoundList = {
  true: `
    border-radius: 92px;`,
  false: `
    border-radius: 6px;`,
};
