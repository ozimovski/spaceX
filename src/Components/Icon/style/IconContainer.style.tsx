import styled from 'styled-components';
import { green } from '../../../style/colors.style';

interface Props {
  selected: boolean;
}

const IconContainer = styled.i<Props>`
  cursor: pointer;
  color: ${({ selected }) => (selected ? green : 'black')};
`;

export default IconContainer;
