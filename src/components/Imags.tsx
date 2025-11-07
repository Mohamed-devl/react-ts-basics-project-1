interface Iprops {
  imageURl: string;
  alt: string;
  className: string;
}
const Imags = ({imageURl, alt, className}: Iprops)=>{
    return <img src={imageURl} alt={alt} className={className} />;
}

export default Imags