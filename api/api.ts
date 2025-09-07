import axiosClient from "@/config/axios";
import { FormState } from "@/interface/contact";



export const sendContactForm = async (formData: FormState) => {
  try {
  // Use the Next.js API route; if a different backend is desired, set NEXT_PUBLIC_API_URL
  // to that server's base URL and keep the path /api/contact consistent there.
  const response = await axiosClient.post("/v1/contact/create", formData);
    return response;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};
