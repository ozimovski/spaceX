import styled from 'styled-components';
import { green } from '../../style/colors.style';

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: ${green};
  color: white;
  padding: 0 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  outline: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Select;
