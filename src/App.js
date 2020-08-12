import React from 'react';
import PropType from 'prop-types';

function Food ( { name, picture, rating } ) {
  return (
    <div>
      <h2> i like { name } </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating : 5,
  },
  
  {
    id : 2,
    name : 'Samgyeposal',
    image : 'https://www.shinsegaegroupinside.com/wp-content/uploads/2019/12/%EC%A3%BC%EB%A7%90%EC%9D%84-%EC%9E%A1%EC%95%84%EB%9D%BC-%EC%9D%B4%EB%A7%88%ED%8A%B8-%EC%82%BC%EA%B2%B9%EC%82%B4-990%EC%9B%90-1.jpg',
    rating : 5,
  },
  
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating : 4.9,
  },

  {
    id : 4,
    name : 'Doncasu',
    image : 'https://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg',
    rating : 4.3,
  },

  {
    id : 5,
    name : 'Kimbap',
    image : 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating : 3.8
  },
];

function App() {
  return ( 
  <div> 
    { foodLike.map ( dish => ( <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> ) ) }
  </div>
  );
}

Food.propTypes = {
  name: PropType.string.isRequired,
  picture:PropType.string.isRequired,
  rating:PropType.number
};


export default App;
