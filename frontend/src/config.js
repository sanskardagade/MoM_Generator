// API Configuration
const isDevelopment = import.meta.env.DEV;
const BASE_URL = isDevelopment ? 'http://69.62.83.14:3000' : '';

console.log('Environment:', isDevelopment ? 'Development' : 'Production');
console.log('Base URL:', BASE_URL);

// API Endpoints
export const API_ENDPOINTS = {
    // Auth endpoints
    REGISTER: `${BASE_URL}/api/auth/register`,
    LOGIN: `${BASE_URL}/api/auth/login`,
    VERIFY_TOKEN: `${BASE_URL}/api/auth/verify`,
    
    // Audio processing endpoints
    PROCESS_AUDIO_MANUAL: `${BASE_URL}/api/process-audio-manual`,
    PROCESS_AUDIO_AUTOMATED: `${BASE_URL}/api/process-audio-automated`,
    LIST_AUDIO_FILES: `${BASE_URL}/api/list-audio-files`,
    ADD_SPEAKER: `${BASE_URL}/api/add-speaker`,
    PREVIEW_FILE: (filename) => `${BASE_URL}/api/preview/${filename}`,
    DOWNLOAD_FILE: (filename) => `${BASE_URL}/api/download/${filename}`,
    GET_AUDIO: (filename) => `${BASE_URL}/api/get-audio/${filename}`,
    DELETE_AUDIO: (filename) => `${BASE_URL}/api/delete-audio/${filename}`
};

// Log all endpoints for debugging
console.log('API Endpoints:', API_ENDPOINTS); 