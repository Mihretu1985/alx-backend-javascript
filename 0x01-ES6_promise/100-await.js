// Example of using async/await with promises

// Function to simulate an asynchronous operation
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: 1, username: 'Mihretu1985', email: 'mthaile1985@gmail.com' };
      // Simulating a successful API response
      resolve(userData);
      // Simulating an error
      // reject(new Error('Failed to fetch user data'));
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Function to fetch user data using async/await
async function getUserData() {
  try {
    console.log('Fetching user data...');
    const userData = await fetchUserData();
    console.log('User data:', userData);
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}

// Calling the getUserData function
getUserData();
