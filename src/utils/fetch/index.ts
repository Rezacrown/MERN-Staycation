import axios from "axios";
import { toast } from "react-toastify";

import { config } from "@/config/index";

export const getData = async (url: string, token?: string | object) => {
  try {
    const response = await axios.get(`${config.ApiUrl}/api${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log({ response: await response.data });
    return response.data;
  } catch (error) {
    toast.error("Failed Load Data", {
      autoClose: 8000,
      position: "top-right",
    });
    // console.log(error);
  }
};

export const postData = async (
  url: string,
  payload: object,
  token?: string | object
) => {
  try {
    const response = await axios.post(`${config.ApiUrl}/api${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    toast.error("Something Error Try Again", {
      autoClose: 8000,
      position: "top-right",
    });
    // console.log(error);
  }
};
