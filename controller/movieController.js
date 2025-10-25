import MovieModel from "../model/movieModel.js";

export const listMovie = async (req,res)=>{
    try {
        const data = await MovieModel.find({})
        res.status(200).json({
            message : "List Movie",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}

export const createNewMovie = async (req,res)=>{
    try {
        const request = req.body
        const response = await MovieModel.create({
            judul: request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
        })

        res.status(201).json({
            message: "Movie berhasil di buat",
            data:response
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}
export const updateMovie = async(req,res)=>{
    try {
        const id = req.params?.id
        const request =req.body
        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await MovieModel.findByIdAndUpdate(id,{
            judul:request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
        })

        if (!response){
            return res.status(500).json({
                message : "Movie gagal di update",
                data:null
            })
        }
        return res.status(200).json({
            message : "Movie berhasil di update",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
            
}

export const deleteMovie = async(req,res)=>{
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await MovieModel.findByIdAndDelete(id)

        if (response){
            return res.status(200).json({
                message : "Movie berhasil dihapus",
                data:null
            })
        }
        return res.status(404).json({
            message : "Movie tidak ditemukan",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}

