import styled from 'styled-components';

interface Props {
  small?: boolean;
}

const Label = styled.div<Props>`
  font-size: ${(p) => (p.small ? '10px' : '14px')};
`;

export default Label;
