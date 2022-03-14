import { Fragment, useState } from 'react';

// components
import Filters from '../../Components/Filters/Filters.component';
import Ships from '../../Components/Ships/Ships.component';
import ShipsViewSwitcher from '../../Components/ShipsViewSwitcher/ShipsViewSwitcher.component';

// consts
import { defaultFilterType } from '../../constants/defaultFilterType.consts';
import { defaultShipView } from '../../constants/defaultShipView.consts';

const ShipsContainer = () => {
  const [view, setView] = useState(defaultShipView);
  const [shipFilterType, setShipFilterType] = useState(defaultFilterType);
  return (
    <Fragment>
      <ShipsViewSwitcher view={view} onClick={setView} />
      <Filters
        shipFilterType={shipFilterType}
        onShipTypeSelect={setShipFilterType}
      />
      <Ships view={view} shipFilterType={shipFilterType} />
    </Fragment>
  );
};

export default ShipsContainer;
