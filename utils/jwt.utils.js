// import 
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'vyT2YD6rT3p_A2rHeCAt8zBYR257guPhV3JdSFt8drU07';

// exported fonctions
module.exports = {
    generateTokenForUser: function (userData) {
        return jwt.sign({
            iduser: userData.id,
            
        },
            'foo',
            {
                expiresIn:'1h'
            })
    },

    
    parseAuthorization: function (authorization) {
        return (authorization != null) ? authorization.replace('Bearer', '') : null;
    },
    getUserId: function (authorization) {
        var iduser = -1;
        var token = authorization;
       
        if (token != null) {     
            try {
                var jwtToken = jwt.verify(token, 'foo');
                //console.log(jwtToken);
                if (jwtToken != null)
                    iduser = iduser;
            } catch (error) {console.log(jwtToken)}
           
        }
         return iduser;
    }


  
}