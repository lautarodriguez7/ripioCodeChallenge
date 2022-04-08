import { feesUrl } from "../utils/constants";

export const getFeesData = async () => {
  try {
    const response = await fetch(feesUrl, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
