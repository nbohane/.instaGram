import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as outlineBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './../App.css';

function BookmarkButton({size='lg'}) {
    const [selected, setSelected] = useState(false);
    const toggleSelect = () => {
        setSelected(!selected);
    }
    return (
    <div>
       <FontAwesomeIcon 
        icon={selected ? solidBookmark: outlineBookmark} 
        color='black'
        size={size}
        onClick={toggleSelect}
       />
    </div>
  );
}
export default BookmarkButton;
