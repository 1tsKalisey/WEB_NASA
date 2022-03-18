import nasa from "./nasa.json";
import { MovieCard } from "./MovieCard";

export function MoviesGrid(){
   
    return(
        <ul>            
        {nasa.map((nasa_,index)=>{
                        
                        
                      //  console.log(nasa_.data[0].description);            
            
            return <MovieCard key={nasa_.id} nasa_={nasa_} />;
        })}
    </ul>

    );
}