import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './../App.css';

function CommentButton({size='lg'}) {
    return (
    <div>
       <FontAwesomeIcon 
        icon={faCommentAlt} 
        color='black' 
        size={size}
       />
    </div>
  );
}

export default CommentButton;
