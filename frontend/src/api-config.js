let backendHost;
if (window.location.href.includes('localhost')) {
    backendHost = 'http://localhost:3001'
} else {
    backendHost = ''
}
console.log(backendHost)
export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `${backendHost}/images/`;