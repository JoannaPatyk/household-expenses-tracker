const handleError = (error) => {
    console.warn('Error', {
        status: error.response.status,
        url: error.response.request.responseURL,
        message: error.response.data.messages
    });
};

export default handleError;
