import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import Slider from "react-slick";
import Cards from './Cards';

const Freebok = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [book,setBook] = useState([])
  useEffect(()=>{
      const getBook = async () =>{
          try {
              const res = await axios.get("http://localhost:4001/book")
              console.log(res.data.filter(item => item.category ==="Free"))
              setBook(res.data.filter(item => item.category ==="Free"))
          } catch (error) {
              console.log(error)
          }
      }
      getBook()
  },[])

    return (
        <div className="mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h4 className='text-xl font-semibold mb-2'>Free Offered Courses</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum illo esse voluptatibus temporibus quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, est.</p>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
  {book.map((item) => {
    return <Cards item={item} key={item.id} />;
  })}
</Slider>

    </div>
        </div>
    )
}

export default Freebok
