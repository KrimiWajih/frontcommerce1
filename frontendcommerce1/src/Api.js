import axios from "axios";

const apiUrl = "http://localhost:5000";
export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl+"/getproducts");

    console.log(response.data);
    return (response.data.Product)
  } catch (error) {
    console.log("error");
    throw error;
  }
};


export const getOneProduct = async ({params}) =>{
try {
    const response = await axios.get(`${apiUrl}/findproduct/${params.id}`)
    console.log(response.data);
    return ({productFound : response.data.Product })
} catch (error) {
    console.log("error");
    throw error;
}


}


export const getCurrent = async () => {
  try {
    const response = await axios.get(`${apiUrl}/getcurrentU`,{ withCredentials: true });
    console.log(response);
    if (response.status === 200) {
      return response.data.User;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const verifyAccount = async ({ params }) => {
  try {
    const response = await axios.get(`${apiUrl}/verify/${params.token}`);
    return response.data;
  } catch (error) {
    throw new Error("Verification failed. Invalid or expired token.");
  }
};
