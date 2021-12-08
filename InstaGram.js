import {useState} from 'react';
import './../App.css';

function InstaGram({avatar, username, image, like, comment, send, caption}) {


    const [selected, setSelected] = useState(false);
    
    const onClick =() => {
      setSelected(!selected)
    }


  return (
    <div className='post' onClick={onClick}>
      <div className='container'>
        <img className='avatar' src={avatar} alt='person'/>
        <p className='userNameText'>{username}</p>
      </div>
      <img className='mainImage'src={image} alt='dog'/>
      <div className='icons'/>
        <p className='LikeButton'>{like}</p>
        <p className='CommentButton'>{comment}</p>
        <p className='SendButton'>{send}</p>
        <p className='caption'>{caption}</p>
    </div>

  );
}

export default InstaGram;
