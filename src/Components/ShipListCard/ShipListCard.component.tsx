import { FC } from 'react';

// models
import { Ship } from '../../types/ship.interface';

// style
import Container from './style/Container.style';
import Data from './style/Data.style';
import Details from './style/Details.style';
import Image from './style/Image.style';
import Label from './style/Label.style';
import Name from './style/Name.style';

// assets
import noImage from '../../assets/no-image.png';

interface Props {
  ship: Ship;
}

const ShipListCard: FC<Props> = ({ ship }) => {
  const goToClick = () => {
    window.location.href = ship.url;
  };

  return (
    <Container onClick={goToClick}>
      <Image src={ship.image ? ship.image : noImage}></Image>
      <Details>
        <Name>{ship.name}</Name>
        <Data>
          <Label small>Type: </Label>
          <Label>{ship.type}</Label>
        </Data>
        <Data>
          <Label small>Year built: </Label>
          <Label>{ship.year_built}</Label>
        </Data>
        <Data>
          <Label small>Weight (kg): </Label>
          <Label>{ship.weight_kg}</Label>
        </Data>
        <Data>
          <Label small>Active: </Label>
          <Label>{ship.active ? 'Yes' : 'No'}</Label>
        </Data>
        <Data>
          <Label small>Home port: </Label>
          <Label>{ship.home_port}</Label>
        </Data>
      </Details>
    </Container>
  );
};

export default ShipListCard;
