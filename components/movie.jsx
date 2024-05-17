export default function Movie(title, id, poster_path){
    
    return(
    <div>
        <img src={poster_path} alt={title}/>
        <Link href={`movies/${id}`}>{title}</Link>
       </div>
       );
       
    } 