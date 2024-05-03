import mockedData from "./mockedData"

export async function mockFetchUser(token) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Decoding the token - this is a dummy adaptation of the token decoding
    const userPasswordToFind = token === '1234567890abcdef' ? 'password123' : 'password456'
    // Find the user in the mockedData array
    const user = mockedData.find(
        user => user.password === userPasswordToFind
    );

    // If the user is found, return a successful response with the user data
    if (user) {
        return {
            status: 200,
            body: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
            },
        }
    }

    // If the user is not found, return an error response
    return {
        status: 401,
        message: 'Invalid token',
    }
}