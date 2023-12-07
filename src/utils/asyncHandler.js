const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.reject(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}

export { asyncHandler }