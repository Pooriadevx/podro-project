import React, { useContext } from "react";
import { LocationDataContextType, Location } from "../../types/locationData";
import { LocationDataContext } from "../../context/locationData";
import { LocationParamsEnum } from "../../constants/locationData";
import CircularProgress from "../circularProgress/circularProgress";
import MapLeaflet from "../map/map";
import classes from "./style.module.scss";

const LocationDetail: React.FC = () => {
  const { locationData, loading } = useContext(
    LocationDataContext
  ) as LocationDataContextType;

  return loading ? (
    <CircularProgress />
  ) : locationData ? (
    <div className={classes.container}>
      <div className={classes.container_map}>
        <MapLeaflet
          key={locationData.location.lng + locationData.location.lat}
          position={[locationData.location.lat, locationData.location.lng]}
        />
      </div>
      <div className={classes.container_items}>
        <div className={classes.container_items_item}>
          <span>{LocationParamsEnum.ip}</span>
          <span id={classes.ip}>{locationData.ip}</span>
          <span>{`(${locationData.ipType})`}</span>
        </div>
        {Object.entries(LocationParamsEnum)
          .slice(1)
          .map(([key, value]) => (
            <div className={classes.container_items_item} key={key}>
              <span>{value}</span>
              <span>{locationData.location[key as keyof Location]}</span>
            </div>
          ))}
      </div>
    </div>
  ) : null;
};

export default LocationDetail;
