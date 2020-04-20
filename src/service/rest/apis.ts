import axios from "axios";
import { FormValuesProps } from "../../pages/ContactUs";

const URL_DEV = "http://localhost:4000";
const URL_PROD = "https://medline-backend.herokuapp.com";
const BASE_URL = process.env.NODE_ENV === "production" ? URL_PROD : URL_DEV;

export function login(body: { email: string; password: string }) {
  return axios.post(BASE_URL + "/login", body);
}

export function signup(body: any) {
  return axios.post(BASE_URL + "/signup", body);
}

export function sendEmailConfirmation(email: string) {
  return axios.post(BASE_URL + "/send-email", { email });
}

export function contactUs(values: FormValuesProps) {
  return axios.post(BASE_URL + "/contact-us", values);
}
