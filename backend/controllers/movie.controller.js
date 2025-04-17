import { fetchFromTMDB } from "../services/tmdb.service.js";
import { ENV_VARS } from "../config/envVars.js"


export async function getTrendingMovies(req,res){

console.log("Getting trending movies...");
try
{
    const data=await fetchFromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
    const randomMovie=data.results[Math.floor(Math.random()*data.results.length)];
    res.json({ success:true, content:randomMovie });
}
catch(error){
    res.status(500).json({ success:false, message:error });
}
};


export async function getMovieTrailers(req,res)
{
    console.log("Getting movie trailers...");
     const {id}=req.params;
    try{
       const data=await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
       res.json({ success:true, content:data.results });
    }
    catch(error)
    {
        if(error.message.includes("404"))
        {
            return res.status(404).send(null)
        }
        return res.status(500).json({ success:false, message:error });
    }
 }

 export async function getMovieDetails(req,res)
 {
    console.log("Getting movie details...");
    const {id}=req.params;
    try{
       const data=await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
       res.json({ success:true, content:data });
    }
    catch(error)
    {
        if(error.message.includes("404"))
        {
            return res.status(404).send(null)
        }
        return res.status(500).json({ success:false, message:error });
    }
 }


 export async function getSimilarMovies(req,res)
 {
    const {id}=req.params;
    console.log("Getting similar movies...");
    try{
        const data=await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
        res.json({ success:true, similar:data.results });
    }
    catch(error)
    {
        if(error.message.includes("404"))
        {
            return res.status(404).send(null)
        }
        return res.status(500).json({ success:false, message:error });
    }
 }
export async function getMoviesByCategory(req,res)
{ 
    console.log("Getting movies by category...");
    const {category} =req.params
    try{
        const data=await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
        res.json({ success:true, content:data.results });
    }
    catch(error)
    {
        res.status(500).json({ success:false, message:error });
    }

}