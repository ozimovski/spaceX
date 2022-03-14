import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

// graphql
import { GET_SHIP_TYPES } from '../../GraphQL/Queries/shipTypes.gql';

// types
import { ShipTypeResponse } from '../../types/ship-type.interface';

// style
import Container from './style/Container.style';
import Select from '../Select/Select.style';
import SelectContainer from './style/SelectContainer.style';

interface Props {
  shipFilterType: string;
  onShipTypeSelect: (shipFilterType: string) => void;
}

const Filters: FC<Props> = ({ shipFilterType, onShipTypeSelect }) => {
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState(shipFilterType);
  const { data } = useQuery<ShipTypeResponse>(GET_SHIP_TYPES);

  useEffect(() => {
    if (data && data.ships) {
      const types = data.ships
        .map((s) => s.type)
        .filter((value, index, self) => self.indexOf(value) === index);
      setTypes(types);
    }
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
    onShipTypeSelect(event.target.value);
  };

  return (
    <Container>
      <SelectContainer>
        <Select value={selectedType} onChange={(e) => handleChange(e)}>
          <option value="all">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </SelectContainer>
    </Container>
  );
};

export default Filters;
