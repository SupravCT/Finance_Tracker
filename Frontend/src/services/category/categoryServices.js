import axios from "axios";
import { BASE_URL } from "../../utils/url.js";
import { getUserStorage } from "../../utils/getUserFromSTorage.js";

export const addCategory = async ({ name, type }) => {
  const response = await axios.post(
    `${BASE_URL}/category/create`,
    {
      name,
      type,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getCategory = async () => {
  const response = await axios.get(`${BASE_URL}/category/get`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateCategory = async ({name,type,_id}) => {
    if (!_id) {
        console.error("Error: ID is undefined in updateCategory function!");
        return;
    }

    const response = await axios.put(`${BASE_URL}/category/update/${_id}`,{
        name,
        type,
        _id
    }, {
      withCredentials: true,
    });
    return response.data;
  };

  export const deleteCategory=async({_id})=>{
    const response=await axios.delete(`${BASE_URL}/category/delete/${_id}`,
      {
      withCredentials:true,

    })
    return response.data
  
  }
