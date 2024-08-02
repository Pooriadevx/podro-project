import React, { createContext, PropsWithChildren, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { validAddressType } from "../utils/common";
import { AxiosInstance } from "../utils/axiosInstance";
import {
  LocationDataContextType,
  LocationDataType,
} from "../types/locationData";

export const LocationDataContext =
  createContext<LocationDataContextType | null>(null);

const LocationDataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationDataType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleData = (ipAddress: string) => {
    const validIpType = validAddressType(ipAddress);
    if (validIpType) {
      setLoading(true);
      AxiosInstance.get("/", { params: { ipAddress } })
        .then((res) => {
          setLocationData({
            ...res.data,
            ipType: validIpType,
          });
        })
        .catch((err: AxiosError) => {
          toast.error(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      toast.warning("آی‌پی وارد شده معتبر نمیباشد");
    }
  };

  return (
    <LocationDataContext.Provider
      value={{
        loading,
        handleData,
        locationData: locationData as LocationDataType,
      }}
    >
      {children}
    </LocationDataContext.Provider>
  );
};

export default LocationDataProvider;
