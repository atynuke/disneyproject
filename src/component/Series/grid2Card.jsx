const Grid2Card = (props) => {
    const {image, title} = props
  
    return (
      <>
        <div>
          <img src={image} alt="" />
          <div>
            <p>NEWS</p>
            <h2>{title}</h2>
            <p>April 4, 2024</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Grid2Card;
  