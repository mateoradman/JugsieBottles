import React from 'react';
import Green from '../../public/BottlePhotos/Green.png';
import Blue from '../../public/BottlePhotos/Blue.PNG';
import White from '../../public/BottlePhotos/White.PNG';
import Turquoise from '../../public/BottlePhotos/Turquoise.png';
import Pink from '../../public/BottlePhotos/Pink.PNG';
import Black from '../../public/BottlePhotos/Black.PNG';
import Lilac from '../../public/BottlePhotos/Lilac.PNG';
import Bottle from "../../components/bottlePhotos/Bottle";

const BottleDisplay = () => {
  return (
    <div className="h-96 grid grid-rows-3 grid-flow-col">
      <Bottle
        bottle={Green}
        bottle_name="Green"
      />

      <Bottle
        bottle={Blue}
        bottle_name="Blue"
      />
      <Bottle
        bottle={White}
        bottle_name="White"
      />
      <Bottle
        bottle={Lilac}
        bottle_name="Lilac"
      />
      <Bottle
        bottle={Pink}
        bottle_name="Pink"
      />
      < Bottle
        bottle={Black}
        bottle_name="Black"
      />
      <Bottle
        bottle={Turquoise}
        bottle_name="Turquoise"
      />
    </div>
  );
};

export default BottleDisplay;
