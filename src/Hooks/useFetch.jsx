import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        // tenta parsear o json e logar status + corpo para diagnóstico
        try {
          json = await response.json();
        } catch (e) {
          json = null;
        }

        if (response.ok === false) throw new Error((json && json.message) || `Request failed with status ${response.status}`);
     
    } catch (err) {
        json = null;
        setError(err.message);
    } finally {
        setData(json);
        setLoading(false);
        return {response, json};
    }
},[]);

  return {
    data,
    error,
    loading,
    request



  };
};
export default useFetch;
