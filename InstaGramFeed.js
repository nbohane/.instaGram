import { icon } from '@fortawesome/fontawesome-svg-core';
import { useState, useEffect } from 'react';
import './../App.css';
import CommentButton from './CommentButton';
import IconTest from './IconTest';
import InstaGram from './InstaGram';
import LikeButton from './LikeButton';
import SendButton from './SendButton';

function InstaGramFeed() {

    const [feed, setFeed] = useState([]);
    
    const clickFunction =() => {
      //function here
    }

    useEffect(() => {
        //This runs one time when the component first loads
        const posts=[
            {
              userName: 'nancy',
              caption: 'this is a picture of my hand',
              LikeButton: LikeButton,
              CommentButton: CommentButton,
              SendButton: SendButton
            },
            {
              userName: 'jay',
              caption: 'this is a picture of my arm',
              LikeButton: LikeButton,
              CommentButton: CommentButton,
              SendButton: SendButton
            },
            {
              userName: 'kelly',
              caption: 'this is a picture of my toe',
              LikeButton: LikeButton,
              CommentButton: CommentButton,
              SendButton: SendButton
            },
            {
              userName: 'mary',
              caption: 'this is a picture of my neck',
              LikeButton: LikeButton,
              CommentButton: CommentButton,
              SendButton: SendButton
            },
            {
              userName: 'nancy',
              caption: 'this is a picture of my finger',
              LikeButton: LikeButton,
              CommentButton: CommentButton,
              SendButton: SendButton
            },
        ];
        setFeed(posts);
    },[]);
    const displayFeed=() => {
        return feed.map((post, i, icons) => {
            return <InstaGram
                key={i}
                avatar='https://picsum.photos/200/'
                username={post.userName}
                image='https://picsum.photos/200'
                like={icons.like}
                commment={icons.commment}
                send={icons.send}
                caption={post.caption}
                />
          });
    }
  return (
    <div>
        {displayFeed()}
    </div>
  );
}

export default InstaGramFeed;
