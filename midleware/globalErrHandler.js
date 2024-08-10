export const globalErrHandler = async(err,req,res,next) =>{
    // stack    ...to tell the exact place where the error ocured 
    // message  
    const stack = err?.stack;
    const statusCode = err?.statusCode ? err?.statusCode : 500 ;
    const message = err?.message;
    res.status(statusCode).json({
        stack,
        message,
    });
}

export const notFound = (req,res,next)=>{
    const err = new Error(`Route ${req.originalUrl} NOT FOUND`);
    next(err);
}