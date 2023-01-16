import { useState } from "react";
import axios from "axios";
import { api_points } from "../constants/api";
const UseFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const proccessQuery = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(api_points);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(true);
    }
  };
  return { data, loading, error, proccessQuery };
};
export default UseFetch;
