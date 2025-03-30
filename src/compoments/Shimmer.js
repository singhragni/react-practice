const Shimmer = () =>{
    return (
        <div className="shimmer-div">
           {Array(6).fill("6").map((val,i) =>{
            return (<div key={i} className="grid1">  </div>)
           })}
        </div>
    )
}

export default Shimmer; 