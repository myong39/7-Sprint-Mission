import styled, { css } from 'styled-components';
import '@assets/styles/Color.css';

export const StyledMain = styled.div`
  width: 1200px;
  padding: 24px 0;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 24px;
  }
  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`;

export const StyledSignMain = styled.main`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const FormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 767px) {
    gap: 16px;
  }
`;

export const StyledForm = styled.form`
  ${FormStyle}

  @media (max-width: 1199px) {
    padding-top: 16px;
  }
`;

export const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormHeaderTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const StyledSignForm = styled.form`
  ${FormStyle}
  width: 100%;
`;

export const ContentText = styled.p`
  font-size: 16px;
  font-weight: 400;

  color: var(--gray-800);
`;

export const Text = styled.p<{
  $SIZE?: string;
  $WEIGHT?: string;
  $COLOR?: string;
}>`
  font-size: ${({ $SIZE }) => $SIZE ?? '16'}px;
  font-weight: ${({ $WEIGHT }) => $WEIGHT ?? '400'};
  color: ${({ $COLOR }) =>
    $COLOR ? `var(--gray-${$COLOR})` : `var(--gray-400)`};

  &.product-description {
    line-height: 22.4px; // 피그마 그대로
  }
`;

export const FlexWrapper = styled.div<{
  $col?: boolean;
  $gap?: string;
  $wrap?: boolean;
  $center?: boolean;
  $RIGHT?: boolean;
  $isMobile?: boolean;
}>`
  display: flex;
  flex-direction: ${({ $col }) => ($col ? 'column' : 'row')};
  gap: ${({ $gap }) => $gap ?? null}px;
  justify-content: ${({ $center, $RIGHT }) =>
    $center ? 'center' : $RIGHT ? 'flex-end' : ''};

  flex-flow: ${({ $wrap }) => ($wrap ? 'wrap' : '')};

  &.comment {
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 24px;

    position: relative;
  }

  &.comment-wrapper {
    margin: 24px 0 40px;
  }

  &.detail {
    padding-bottom: 32px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--gray-200);

    flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  }

  &.detail-content {
    justify-content: space-between;
    align-items: baseline;
    width: 100%;

    & > div:first-child {
      width: 100%;
    }
  }

  &.comment-empty {
    align-items: center;
  }

  &.detail-product-title {
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 16px;

    position: relative;
    img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
