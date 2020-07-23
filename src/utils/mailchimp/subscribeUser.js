import axios from "axios";
import isNodeEnv from "../isNodeEnv";
const url = isNodeEnv("development")
  ? "http://localhost:5000/meal_planner_subscribe"
  : "https://eurekaholisticnutrition.com/api/meal_planner_subscribe";

const mailChimpSubscribe = ({ email, fName, lName }) => {
  return axios.post(url, {
    email,
    fName,
    lName,
  });
};

export default mailChimpSubscribe;
