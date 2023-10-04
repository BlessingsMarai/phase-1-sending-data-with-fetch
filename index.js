// Add your code here
function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const userData = {
    name: name,
    email: email,
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  // Return the fetch() chain directly
  return fetch(url, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Append the new id to the DOM
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${data.id}`;
      document.body.appendChild(idElement);
      return data; // Return the data for further processing if needed
    })
    .catch((error) => {
      // Check if the error message contains "Unauthorized Access"
      if (error.message.includes("Unauthorized Access")) {
        // Append the specific error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Error: Unauthorized Access';
        document.body.appendChild(errorElement);
      } else {
        // Append other error messages to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      }
      
      // Re-throw the error to propagate it if needed
      throw error;
    });
}








