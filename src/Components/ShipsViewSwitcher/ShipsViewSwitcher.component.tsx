import { FC } from 'react';

// components
import Icon from '../Icon/Icon.component';

// style
import Container from './style/Container.style';
import View from './style/View.style';

interface Props {
  view: string;
  onClick: (view: string) => void;
}

const ShipsViewSwitcher: FC<Props> = ({ view, onClick }) => (
  <Container>
    <View onClick={() => onClick('list')}>
      <span>List</span>
      <Icon name="view-list" selected={view === 'list'} />
    </View>
    <View onClick={() => onClick('gallery')}>
      <span>Gallery</span>
      <Icon selected={view === 'gallery'} name="view-gallery" />
    </View>
  </Container>
);

export default ShipsViewSwitcher;
