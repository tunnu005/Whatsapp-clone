import mongoose from "mongoose";

const UserSchema=mongoose.Schema({

        iss:{
            type:String,
        },
        nbf:{
            type:Number,
        },
        aud:{
            type:String,
        },
        sub:{
            type:String,
            require:true,
        },
        hd:{
            type:String,
        },
        email:{
            type:String,
        },
        email_varified:{
            type:Boolean,
        },
        azp:{
            type:String,
        },
        name:{
            type:String,
            require:true
        },
        picture:{
            type:String,
            require:true
        },
        given_name:{
            type:String,
        },
        iat:{
            type:String,
        },
        exp:{
            type:String,
        },
        jti:{
            type:String,
        },

});

const User = mongoose.model('User',UserSchema);
export default User;

