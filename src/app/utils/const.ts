//  



export function getBaseUrl(): string {
  const origin = window.location.origin;
  console.log('Detected origin:', origin);

 

  if (origin.includes('192.168.11.76')) {
    return 'http://192.168.11.76:8088/ats-mahindra-battery-0.0.1/';
  } else if (origin.includes('10.192.65.165')) {
    return 'http://10.192.65.165:8080/ats-mahindra-battery-0.0.1/';
  } else if (origin.includes('localhost')) {
    return 'http://localhost:8088/';
  }

  return 'http://localhost:8088/';
}

export const BASE_URL = getBaseUrl();

