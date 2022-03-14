import styled from 'styled-components';
import { green } from '../../../style/colors.style';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 50%;
  height: 400px;
  margin: auto;
  border: 1px solid #ccc;
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${green};
  transition: ease 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  :hover {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    width: 95%;
    padding-right: 8px;
  }
`;

export default Container;
