import axios from "axios";
import { BASE_URL } from "../../utils/url";

export const addTransaction = async ({
  category,
  type,
  amount,
  description,
  date,
}) => {
  const response = await axios.post(
    `${BASE_URL}/transaction/add`,
    {
      category,
      type,
      amount,
      description,
      date,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getTransaction = async ({category,type,startDate,endDate  }) => {
  const response = await axios.get(`${BASE_URL}/transaction/get`, {
    params:{category,endDate,startDate,type},
    withCredentials: true,
  });
  return response.data;
};