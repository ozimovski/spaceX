import { FC } from 'react';

// style
import IconContainer from './style/IconContainer.style';

interface Props {
  name: string;
  selected: boolean;
}

const Icon: FC<Props> = ({ name, selected }) => (
  <IconContainer className={`mdi mdi-${name}`} selected={selected} />
);

export default Icon;
