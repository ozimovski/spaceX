import { FC, Fragment, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';

// graphql
import { useQuery } from '@apollo/client';
import { GET_SHIPS } from '../../GraphQL/Queries/ships.gql';

// types
import { Ship } from '../../types/ship.interface';

// components
import { Triangle } from 'react-loader-spinner';
import ShipListCard from '../ShipListCard/ShipListCard.component';
import ShipsGalleryView from '../ShipsGalleryView/ShipsGalleryView.component';
import LoaderContainer from './style/LoaderContainer.style';

interface Props {
  view: string;
  shipFilterType: string;
}

const Ships: FC<Props> = ({ view, shipFilterType }) => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [offset, setOffset] = useState(5);
  const { error, loading, data, fetchMore } = useQuery<{ ships: Ship[] }>(
    GET_SHIPS,
    {
      variables: {
        limit: 5,
        offset: 0,
        type: shipFilterType === 'all' ? '' : shipFilterType,
      },
    },
  );

  useEffect(() => {
    if (data && data.ships) {
      setShips(data.ships);
    }
  }, [data, view, shipFilterType]);

  const onSwiperReachEnd = () => {
    fetchMore({
      variables: {
        offset,
      },
      updateQuery: (pv, { fetchMoreResult }): { ships: Ship[] } => {
        if (!fetchMoreResult) return { ships: pv.ships };
        setOffset(offset + 5);
        return {
          ships: [...pv.ships, ...fetchMoreResult.ships],
        };
      },
    });
  };

  return (
    <Fragment>
      {loading ? (
        <LoaderContainer>
          <Triangle height={160} width={160} />
        </LoaderContainer>
      ) : view === 'list' ? (
        ships.map((ship, i) => (
          <Fragment key={ship.id}>
            <ShipListCard ship={ship} />
            {i === ships.length - 5 && (
              <Waypoint
                onEnter={() =>
                  fetchMore({
                    variables: {
                      offset,
                      type: shipFilterType === 'all' ? '' : shipFilterType,
                    },
                    updateQuery: (
                      pv,
                      { fetchMoreResult },
                    ): { ships: Ship[] } => {
                      if (!fetchMoreResult) return { ships: pv.ships };
                      setOffset(offset + 5);
                      return {
                        ships: [...pv.ships, ...fetchMoreResult.ships],
                      };
                    },
                  })
                }
              />
            )}
          </Fragment>
        ))
      ) : (
        <ShipsGalleryView ships={ships} onReachEnd={onSwiperReachEnd} />
      )}
    </Fragment>
  );
};

export default Ships;
