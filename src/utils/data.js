const auth_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo";

export const makeApiCall = async (endpoint) => {
  const url = `http://enl.centralindia.cloudapp.azure.com/assignment${endpoint}`;
  const headers = {
    Authorization: `${auth_token}`,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
