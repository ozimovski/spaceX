import styled from 'styled-components';

// colors
import { green, white } from '../../../style/colors.style';

const NavigationLink = styled.div`
  display: inline-block;
  color: ${white};
  text-align: center;
  padding: 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${green};

  &.active {
    color: ${white};
    background-color: ${green};
  }
`;

export default NavigationLink;
