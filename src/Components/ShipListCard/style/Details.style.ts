import styled from 'styled-components';

const Details = styled.div`
  padding: 24px;
  color: white;
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 8px;
    margin: auto;
  }
`;

export default Details;
