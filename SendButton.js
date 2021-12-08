import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import './../App.css';

function SendButton({size='lg'}) {
    return (
    <div>
       <FontAwesomeIcon 
        icon={faPaperPlane} 
        color='black' 
        size={size}
       />
    </div>
  );
}

export default SendButton;
