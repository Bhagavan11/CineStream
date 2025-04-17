import React, { useEffect, useRef, useState } from 'react'
import { useContentStore } from '../store/content';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieSlider = (props) => {
    const { category } = props;
    const {contentType}=useContentStore();
    const formatedContentType= contentType=="movie"? "Movies":"TV Shows"
    const formattedCategoryName = category.replaceAll("_", " ").replace(/^./, match => match.toUpperCase());
    const [content, setContent] = useState([])
    const [showArrows, setShowArrows] = useState(false);
    const sliderRef=useRef(null);
    const scrollLeft = () => {
  if (sliderRef.current) {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: 'smooth',
    });
  }
};

const scrollRight = () => {
  if (sliderRef.current) {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: 'smooth',
    });
  }
};

  useEffect(() => {
  const getContent = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/${contentType}/${category}`, {
        withCredentials: true, // allow cookies
      });
      setContent(response.data.content);
      console.log(response.data); // do something with the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getContent();
}, [category, contentType]);
    return (
        <div className='bg-black text-white relative px-5 md:px-20' onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>

                <h2 className='mb-4 text-2xl font-bold'>{formattedCategoryName} {formatedContentType}</h2>
                <div className='flex space-x-4 overflow-x-scroll no-scrollbar' ref={sliderRef}>
                    {content.map((item) => (
                    <Link to={`/watch/${item.id}`} key={item.id} className='min-w-[250px] relative group'>
                        <div className='rounded-lg overflow-hidden'>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                            alt="Movie image"
                            className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                        />
                        </div>
                        <p className='mt-2 text-center'>
                        {item.title || item.name}
                        </p>
                    </Link>
                    ))}
                </div>
               {showArrows && (
                    <>
                        <button className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
                        onClick={scrollLeft}>
                        <ChevronLeft size={24} />
                        </button>
                        <button className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
                        onClick={scrollRight}>
                        <ChevronRight size={24} />
                        </button>
                    </>
                    )}

        </div>

    );
}

export default MovieSlider;
