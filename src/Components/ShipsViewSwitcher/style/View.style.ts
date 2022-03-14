import styled from 'styled-components';

const View = styled.div`
  display: flex;
  gap: 4px;
  font-size: 30px;
  align-items: center;
  cursor: pointer;
  transition: ease 0.3s;

  span {
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export default View;
