import styled from 'styled-components/native';
import {StyledText} from '../General/Text';

export const AboutContentText = styled(StyledText)<{bottom?: string}>`
  color: #ffffff;
  margin-bottom: ${({bottom}) => (bottom ? `${bottom}px` : '0px')};
  /* text-align: justify; */
`;
