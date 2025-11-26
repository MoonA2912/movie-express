import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        judul : {
            type : String,
            unique : true,
            required : true,
            trim : true
        },
        tahunRilis:{
            type : String,
            requied : true,
            trim : true,
        },
        sutradara : {
            type : String,
            requied : true,
            trim : true,
        }
    },
    {
        timestamps : true
    }
)

const MovieModel= mongoose.model("movies", MovieSchema);

export default MovieModel;

//npm init -y
// npm install express
// npm install mongoose
// npm install -D nodemon
// npm run dev
// mongosh