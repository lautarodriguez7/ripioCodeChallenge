import { BTCPriceUrl } from "../utils/constants";

export const getBTCData = async () => {
  try {
    const response = await fetch(BTCPriceUrl, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    return { data };
  } catch (error) {
    return error;
  }
};
