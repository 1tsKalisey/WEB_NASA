export function  MovieCard({nasa_}){

    let defecto={
        0: {
            "href": "NO HAY NADA",
            "rel": "preview",
            "render": "image"
        }
        
    }

    if(nasa_.links===undefined){
        nasa_.links=defecto;  
        //console.log(index);
      
    }


    const imgUrl =nasa_.links[0].href;
    return <li >
        <img src={imgUrl} alt={nasa_.data[0].title} />
        <div>{nasa_.data[0].title}</div>
        </li>;
}