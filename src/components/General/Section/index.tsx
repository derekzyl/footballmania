import styled from 'styled-components/native';
import responsive from '../../../lib/responsive';
import { StyledText } from '../Text';

const GeneralSectionTitle = styled(StyledText)`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  /* margin-top: ${responsive.height(1)}px; */
  margin-bottom: ${responsive.height(4)}px;
`;

export default GeneralSectionTitle;
