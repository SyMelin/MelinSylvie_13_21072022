import mockedData from './mockedData'

export async function mockLoginRequest(signInFormData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
  
    // Find the user in the mockedData array
    const user = mockedData.find(
      user => user.email === signInFormData.email && user.password === signInFormData.password
    );
  
    // If the user is found, return a successful response
    if (user) {
      return {
        status: 200,
        body: {
          token: user.password === 'password123' ? '1234567890abcdef' : 'qwertyuiopasdfghjkl', // mock token - the condition is here to have two different tokens since the password will differ between the two users
        },
      }
    }
  
    // If the user is not found, return an error response
    return {
      status: 401,
      message: 'Invalid email or password',
    }
  }