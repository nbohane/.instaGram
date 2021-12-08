import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './../App.css';

function LikeButton({size='lg'}) {
    const [selected, setSelected] = useState(false);
    const toggleSelect = () => {
        setSelected(!selected);
    }
    return (
    <div>
       <FontAwesomeIcon 
        icon={selected ? solidHeart: outlineHeart} 
        color={selected ? 'red': 'black'} 
        size={size}
        onClick={toggleSelect}
       />
    </div>
  );
}

export default LikeButton;
