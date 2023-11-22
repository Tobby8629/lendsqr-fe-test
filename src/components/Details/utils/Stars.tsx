import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

interface DynamicStarRatingProps {
  numberOfStars: number;
}

const DynamicStarRating: React.FC<DynamicStarRatingProps> = ({ numberOfStars }) => {
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    const clampedStars = Math.max(0, Math.min(3, numberOfStars));
    setFilledStars(clampedStars);
  }, [numberOfStars]);

  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          role="img"
          aria-label="star"
          style={{ color: index < filledStars ? 'gold' : 'lightgray' }}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  );
};

export default DynamicStarRating;
