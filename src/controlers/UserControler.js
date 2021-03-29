const ListUsers = () => {
  fetch('http://protocolo.v2.api/users', {
    method: 'GET',
    mode: 'cors',
    headers: {}
  })
    .then(async (response) => {
      const data = await response.json();

      console.log(data);
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      return { postId: data.id };
    })
    .catch((error) => {
      console.error('There was an error!', error);
      return { errorMessage: error.toString() };
    });
};

export default ListUsers;
