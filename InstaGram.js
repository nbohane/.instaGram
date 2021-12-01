import {useState} from 'react';
import './../App.css';

function InstaGram({avatar, username, image, caption}) {


    const [selected, setSelected] = useState(false);
    
    const onClick =() => {
      setSelected(!selected)
    }


  return (
    <div className='post' onClick={onClick}>
      <img src={avatar} alt='person'/>
      <p className='userNameText'>{username}</p>
      <image src='https://picsum.photos/200' alt='dog'/>
      <p className='caption'>{caption}</p>
    </div>

  );
}

export default InstaGram;
