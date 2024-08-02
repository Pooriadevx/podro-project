import React from "react";
import LocationDataProvider from "../../context/locationData";
import LocationDetail from "../../components/locationDetail/locationDetail";
import SearchApiInput from "../../components/searchApiInput/searchApiInput";
import clasess from "./style.module.scss";

const LocationData: React.FC = () => {
  return (
    <div className={clasess.container}>
      <p>آی پی مد نظر خود را پیدا کنید</p>
      <p>
        اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با
        استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه
        باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی "دریافت
        جزئیات IP" کلیک کنید.
      </p>
      <LocationDataProvider>
        <SearchApiInput />
        <LocationDetail />
      </LocationDataProvider>
    </div>
  );
};

export default LocationData;
