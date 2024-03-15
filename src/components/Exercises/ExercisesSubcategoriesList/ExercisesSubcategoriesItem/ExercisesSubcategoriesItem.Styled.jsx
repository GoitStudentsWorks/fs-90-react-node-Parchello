import { styled } from 'styled-components';
// import { Pagination } from 'swiper/modules';

export const ExercisesItem = styled.li`
  display: block;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 32px;
  }
`;

export const ExerscisesItemContainer = styled.div`
  width: 335px;
  height: 206px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #040404;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 224px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`;

export const BodyPart = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.white};

  margin-top: 81px;
  margin-bottom: 0;
`;

export const BodyPartCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.grey};
  margin-top: 2px;
`;

// export const PaginationStyled = createGlobalStyle`
//  .swiper-pagination-bullet {
// /* color: red; */
//   }
//   .swiper-pagination-bullet-active {
//   color: #fff;
//   background: #007aff;
// }

// `;
