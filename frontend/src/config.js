// API Configuration
export const NODE_API_BASE_URL = import.meta.env.VITE_NODE_API_BASE_URL || 'http://69.62.83.14:3000';
export const PYTHON_API_BASE_URL = import.meta.env.VITE_PYTHON_API_BASE_URL || 'http://69.62.83.14:5001';

// API Endpoints
export const API_ENDPOINTS = {
    // Auth endpoints (Node.js backend)
    REGISTER: `${NODE_API_BASE_URL}/auth/register`,
    LOGIN: `${NODE_API_BASE_URL}/auth/login`,
    VERIFY_TOKEN: `${NODE_API_BASE_URL}/auth/verify`,
    
    // Audio processing endpoints (Python backend)
    PROCESS_AUDIO_MANUAL: `${PYTHON_API_BASE_URL}/process-audio-manual`,
    PROCESS_AUDIO_AUTOMATED: `${PYTHON_API_BASE_URL}/process-audio-automated`,
    LIST_AUDIO_FILES: `${PYTHON_API_BASE_URL}/list-audio-files`,
    ADD_SPEAKER: `${PYTHON_API_BASE_URL}/add-speaker`,
    PREVIEW_FILE: (filename) => `${PYTHON_API_BASE_URL}/preview/${filename}`,
    DOWNLOAD_FILE: (filename) => `${PYTHON_API_BASE_URL}/download/${filename}`,
    GET_AUDIO: (filename) => `${PYTHON_API_BASE_URL}/get-audio/${filename}`,
    DELETE_AUDIO: (filename) => `${PYTHON_API_BASE_URL}/delete-audio/${filename}`
}; 