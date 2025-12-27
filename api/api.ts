import { FormState } from "@/interface/contact";
import fetchClient from "@/config/axios";


export const sendContactForm = async (formData: FormState) => {
  try {
  const response = await fetchClient("/v1/contact/create", "POST", formData);
    return response;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};
