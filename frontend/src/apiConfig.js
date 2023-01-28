const server_address = process.env.REACT_APP_SERVER_ADDRESS || 'http://localhost:5000';
const api_version = process.env.REACT_APP_API_VERSION || '/api/v1';

const apiConfig = {
    api: server_address + api_version
};

export default apiConfig;
