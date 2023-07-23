import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { space, type SpaceProps } from 'styled-system';

export interface ParagraphProps extends SpaceProps {
  weight?: '700' | '500' | '400' | '300';
  color?: CSSProperties['color'];
  lineHeight?: '100%' | '150%';
}

export interface HeadingProps extends SpaceProps {
  weight?: '700' | '500' | '400' | '300';
  color?: CSSProperties['color'];
  lineHeight?: '100%' | '130%';
  display?: 'inline' | 'block';
}

export const H1 = styled.h1<HeadingProps>`
  font-size: 22px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const H2 = styled.h2<HeadingProps>`
  font-size: 18px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const H3 = styled.h3<HeadingProps>`
  font-size: 17px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const H4 = styled.h4<HeadingProps>`
  font-size: 16px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const H5 = styled.h5<HeadingProps>`
  font-size: 14px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const H6 = styled.h6<HeadingProps>`
  font-size: 12px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: ${({ lineHeight }) => lineHeight ?? '100%'};
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
  display: ${({ display }) => display ?? 'block'};
  ${space}
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 14px;
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: 150%;
  color: ${({ color, theme }) => color ?? theme.colors.mono.black};
`;
