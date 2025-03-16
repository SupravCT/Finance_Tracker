import axios from "axios";
import { BASE_URL } from "../../utils/url";

export const loginApi = async ({ email, password }) => {
  const response = await axios.post(
    `${BASE_URL}/user/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const registerApi = async ({ name, email, password }) => {
  const response = await axios.post(
    `${BASE_URL}/user/register`,
    {
      name,
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const changePassword = async ({ password ,newPassword}) => {
  const response = await axios.put(
    `${BASE_URL}/user/password`,
    {
      password,
      newPassword
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateProfile = async ({ name, email }) => {
  const response = await axios.put(
    `${BASE_URL}/user/update`,
    {
      name,
      email,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
