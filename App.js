import { useEffect } from 'react';
import './App.css';

import Card from './components/Card';
import ProfileItem from './components/ProfileItem';
//import ProfileItemList from './components/ProfileItemList';
import TextMessage from './components/TextMessage';
import InstaGram from './components/InstaGram';
import CardImg from './components/CardImg';



//JSON: Javascript Object Notation

let person = {
  firstName: 'Jay',
  lastName: 'Baffoni',
  age:31,
  favorites: {
    movie: 'star wars',
    book: 'Ender\'s Game',
    food: 'pizza'
  }
}

const message = {
  time: '1 hour ago',
  text: 'Hello Nancy',
  sender: 'jbaffoni',
  favorited: false
}

const messages = [
  {
    time: '1 hour ago',
    text: 'Hello Nancy',
    sender: 'jbaffoni',
    favorited: false,
    likedBy: [
      'Hannah',
      'Kelly',
      'Emily'
    ]
  },
  {
    time: 'now',
    text: 'Hello Jay',
    sender: 'nbohane',
    favorited: true,
    likedBy: []
  },
]

const family = [
  {
    name: 'Hannah',
    age: 22,
    dating: true,
    favorites: {
      movie: ['Jurassic World', ],
      tvShow: ['Friends', 'Office'] 
    }
  },
  {
    name: 'Emily'
  },
  {
    name: 'Kelly'
  },
  {
    name: 'Mary'
  }
]


function App() {


  return (
    <div className="App">
      <CardImg/>
      <InstaGram/>
    </div>
  );
}

export default App;
