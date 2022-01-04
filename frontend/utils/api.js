export const getDefaultRequest = (method = "GET") => {
  const defaultRequest = {
    method: method,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  return defaultRequest;
};

export async function getAuthToken() {
  const customRequestDetails = getDefaultRequest("POST");
  customRequestDetails.body = JSON.stringify({
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
  });
  const url = new URL("token/", process.env.API_HOST);
  return fetch(url.href, customRequestDetails)
    .then((response) => response.json())
    .then((result) => {
      return `Bearer ${result.access}`;
    })
    .catch((error) => {
      console.error(`error in getAuthToken`, error);
    });
}
