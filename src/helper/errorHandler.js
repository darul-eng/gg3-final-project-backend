export function errorHandler(error){
    let response;
    if (error.message === "Not Found"){
        return response = {
            message: "Not Found",
            status: 404
        }
    }

    return response = {
        message: `Server Error: ${error.message}`,
        status: 500
    }
}
