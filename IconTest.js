import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './../App.css';

function IconTest() {
    const [selected, setSelected] = useState(false);
    const toggleSelect = () => {
        setSelected(!selected);
    }
    return (
    <div>
       <FontAwesomeIcon 
        icon={selected ? solidHeart: outlineHeart} 
        color={selected ? 'red': 'black'} 
        size={"6x"}
        onClick={toggleSelect}
       />
    </div>
  );
}

export default IconTest;
