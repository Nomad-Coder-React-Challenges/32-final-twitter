import styled from '@emotion/styled';

interface ThemeProps {
  isDarkMode: boolean;
}

interface DarkIconProps extends ThemeProps {
  isDarkIcon?: boolean;
}

const Button = styled.button<ThemeProps>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  background-color: ${({ theme }) => theme.colors.mono.white};
  ${({ theme, isDarkMode }) =>
    isDarkMode && `background-color: ${theme.colors.mono[100]};`}
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme, isDarkMode }) =>
        isDarkMode ? theme.colors.mono.white : theme.colors.mono[100]};
      box-shadow: none;
    }
  }
`;

const Icons = styled.article<DarkIconProps>`
  @keyframes rotateAndShrink {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(360deg);
    }
  }
  @keyframes rotateAndExpand {
    0% {
      transform: scale(0) rotate(0deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  position: absolute;
  animation: ${({ isDarkIcon, isDarkMode }) =>
      isDarkMode
        ? isDarkIcon
          ? 'rotateAndExpand'
          : 'rotateAndShrink'
        : isDarkIcon
        ? 'rotateAndShrink'
        : 'rotateAndExpand'}
    0.3s cubic-bezier(0.2, 0, 0.8, 1.2) forwards;
`;

export { Button, Icons };
