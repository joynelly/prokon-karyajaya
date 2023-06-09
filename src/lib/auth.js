import axios from 'axios';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export async function checkAuthenticated() {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return false;
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/verify`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`
      }
    });
    
    return response.status === 200 ? true : false;
  }
  catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return false;
  }
}