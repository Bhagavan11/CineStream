import { fetchFromTMDB } from "../services/tmdb.service.js";
import { ENV_VARS } from "../config/envVars.js"


export async function getTrendingTv(req,res){
console.log("Trending TV endpoint hit");  // Log for debugging purposes

try
{
    const data=await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
    const randomMovie=data.results[Math.floor(Math.random()*data.results.length)];
    res.json({ success:true, content:randomMovie });
}
catch(error){
    res.status(500).json({ success:false, message:error });
}
};


export async function getTvTrailers(req,res)
{
    console.log("TV Trailers endpoint hit");  // Log for debugging purposes
     const {id}=req.params;
    try{
       const data=await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
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

 export async function getTvDetails(req,res)
 {
    console.log("TV Details endpoint hit");  // Log for debugging purposes
    const {id}=req.params;
    try{
       const data=await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
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


 export async function getSimilarTv(req,res)
 {
    console.log("getting similar Tv")
    const {id}=req.params;
    try{
        const data=await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
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
export async function getTvByCategory(req,res)

{ 
    console.log("Getting TV by category")  // Log for debugging purposes
    const {category} =req.params
    try{
        const data=await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.json({ success:true, content:data.results });
    }
    catch(error)
    {
        res.status(500).json({ success:false, message:error });
    }

}