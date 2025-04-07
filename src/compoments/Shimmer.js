const Shimmer = () =>{
    return (
        <div className="flex flex-wrap">
           {Array(6).fill("6").map((val,i) =>{
            return (<div key={i} className="m-4 p-4 w-[250px] h-[300px] rounded-lg bg-gray-400 shadow-lg">  </div>)
           })}
        </div>
    )
}

export default Shimmer; 