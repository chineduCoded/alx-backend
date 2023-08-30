import redis from 'redis';

// Create a Redis client instance
const client = redis.createClient();

// Handle successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle connection errors
client.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

// Define function to set a new school
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Define function to display the value of a school
function displaySchoolValue(schoolName) {
  client.get(schoolName, (error, value) => {
    if (error) {
      console.error(error);
      throw error;
    } else {
      console.log(value);
    }
  });
}

// Call the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
