import { IPV4_REGEX, IPV6_REGEX } from "../constants/common";

export const formatTime = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export const convertNumsToPer = (match: string) =>
  String.fromCharCode(match.charCodeAt(0) + 1728);

export const validAddressType = (ipAddress: string) => {
  if (IPV4_REGEX.test(ipAddress)) {
    return "ipv4";
  } else if (IPV6_REGEX.test(ipAddress)) {
    return "ipv6";
  } else {
    return false;
  }
};
