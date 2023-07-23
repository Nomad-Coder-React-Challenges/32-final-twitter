import { css, Theme } from '@emotion/react';

const container = ({ theme }: { theme: Theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 246px;
  max-height: 560px;
  min-width: 140px;
  min-height: 280px;
  user-select: none;
  background: transparent;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid ${theme.colors.mono[300]};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  @media (hover: hover) {
    &:hover {
      scale: 1.01;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
  }
`;

const thumbnailContainer = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  aspect-ratio: 330 / 500;
`;

const descriptionContainer = css`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  padding: 16px;
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const title = css`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const author = css`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const styles = {
  container,
  thumbnailContainer,
  descriptionContainer,
  title,
  author,
};

export default styles;
