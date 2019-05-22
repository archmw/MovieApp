/**
 * create a helper module that creates response from result/ or shows error
 */

function createResponse(error, result){
    const response = {
        status: 'success',
        data: result
    }
    if(error != null){
        response.status = 'error',
        response.data = error
    }

    return response;

}

module.exports = {
    createResponse: createResponse
}