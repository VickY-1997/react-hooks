


const Person = (props) => {
    const {name, nickName="No nickName" , images}  = props;

    const img = images?.[0]?.small?.url

   
  return (
    <div>
        <img src={img} alt={name}  style={{width : "50px"}} />
      <h2>{name}</h2>
      <p>Nick Name : {nickName}</p>
    </div>
  )
}


export default Person
