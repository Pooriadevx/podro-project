export type LocationDataContextType = {
  locationData: LocationDataType;
  handleData: (value: string) => void;
  loading: boolean;
};

export type LocationDataType = {
  ip: string;
  location: Location;
  domains: string[];
  as: As;
  isp: string;
  ipType: string;
};

export type Location = {
  country: string;
  region: string;
  city: string;
  timezone: string;
  lat: number;
  lng: number;
  postalCode: string;
  geonameId: number;
};

type As = {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
};

export type MapLeafletPropsType = { position: [lat: number, lng: number] };
