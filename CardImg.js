import './../App.css';

function CardImg(props) {
  return (
    <div>
        <img src={props.src} alt='Card Thing' />
    </div>
  );
}

export default CardImg;
