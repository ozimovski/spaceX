import { FC } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

// models
import { Ship } from '../../types/ship.interface';

// style
import Container from './style/Container.style';
import Image from './style/Image.style';
import Caption from './style/Caption.style';

// assets
import noImage from '../../assets/no-image.png';

interface Props {
  ships: Ship[];
  onReachEnd: () => void;
}

const ShipsGalleryView: FC<Props> = ({ ships, onReachEnd }) => (
  <Container>
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={'auto'}
      autoplay={true}
      navigation
      className="mySwiper"
      onReachEnd={onReachEnd}
    >
      {ships.map((ship) => (
        <SwiperSlide key={ship.id}>
          <Image src={ship.image ? ship.image : noImage}></Image>
          <Caption>{ship.name}</Caption>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);

export default ShipsGalleryView;
