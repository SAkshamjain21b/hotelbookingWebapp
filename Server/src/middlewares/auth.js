import jwt from "jsonwebtoken";

const auth =  async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const customAuth = token.length <500;

        let decodedData;

        if(token && customAuth){
            decodedData = jwt.verify(token,'test');
            req,userID = decodedData?.id;
        }


    } catch (error) {
        
    }
}