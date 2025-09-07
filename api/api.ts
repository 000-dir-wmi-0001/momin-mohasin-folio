import axiosClient from "@/config/axios";
import { FormState } from "@/interface/contact";



export const sendContactForm = async (formData: FormState) => {
  try {
  const response = await axiosClient.post("/v1/contact/create", formData);
    return response;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};
