

const authorizeRole = (...allowedRoles)=>{
    return(req,res,next)=>{

        if(!req.user){
            return res.status(401).json({message:"Unauthorized"});
        }


        const userRole = req.user.role;//
        const hasRole = allowedRoles.some(role =>{
            return userRole[role] === true;
        });
        if(!hasRole){
            return res.status(403).json({message : 'Forbidden'});

        }
        next();
    }
}

export default authorizeRole;