import { useState } from 'react';
import styled from 'styled-components';
import { useResponsiveApi } from '@hooks/Responsive';
import Favorite from '@components/Favorite';
import { StyledProductTag } from '@components/Input';
import { FlexWrapper, Text } from '@components/common/CommonComponents';
import Kebab from '@components/Kebab';
// import 'styles/Color.css';

const DetailItemImage = styled.img<{ $isDesktop: boolean; $isTablet: boolean }>`
  width: ${({ $isDesktop, $isTablet }) =>
    $isDesktop ? '486px' : $isTablet ? '340px' : '100%'};
  height: ${({ $isDesktop, $isTablet }) =>
    $isDesktop ? '486px' : $isTablet ? '340px' : '100%'};
  border-radius: 16px;
`;

interface ProductOption {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
  images: string;
  ownerId: number;
  favoriteCount: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Product {
  product: ProductOption;
}

function DetailProduct({ product }: Product) {
  const { name, description, price, images, tags, favoriteCount } = product;
  const { isDesktop, isTablet, isMobile } = useResponsiveApi();

  const [isKebab, setIsKebab] = useState(false);

  const handleDisplay = () => {
    setIsKebab((prev) => !prev);
  };

  return (
    <FlexWrapper className='detail' $gap='24' $isMobile={isMobile}>
      <DetailItemImage
        src={images}
        alt='product'
        $isDesktop={isDesktop}
        $isTablet={isTablet}
      />
      <FlexWrapper $col className='detail-content'>
        <FlexWrapper $col $gap='16'>
          <FlexWrapper $col $gap='16' className='detail-product-title'>
            <Text $SIZE='24' $WEIGHT='600' $COLOR='800'>
              {name}
            </Text>
            <Text $SIZE='40' $WEIGHT='600' $COLOR='800'>
              {price ? price.toLocaleString() : '0'}원
            </Text>
            <Kebab />
          </FlexWrapper>

          <FlexWrapper $col $gap='23'>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 소개
              </Text>
              <Text
                $SIZE='16'
                $WEIGHT='400'
                $COLOR='800'
                className='product-description'
              >
                {description}
              </Text>
            </FlexWrapper>
            <FlexWrapper $col $gap='8'>
              <Text $SIZE='14' $WEIGHT='500' $COLOR='600'>
                상품 태그
              </Text>
              <FlexWrapper $gap='8' $wrap>
                {tags &&
                  tags.map((tag, index) => (
                    <StyledProductTag key={index}>#{tag}</StyledProductTag>
                  ))}
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>

        <Favorite>{favoriteCount}</Favorite>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default DetailProduct;
