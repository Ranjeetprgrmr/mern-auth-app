import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken  = (req, res, next) => {
    const token = req.cookies.access_token;

    if(!token) {
        return next(errorHandler(401, "You are not authenticated , Access Denied !"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(403).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
        
    })
    
}