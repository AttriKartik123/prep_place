import Button from "./Buttons";


function Cards(props) {
  console.log(props);
  
    return (
      <>  
      <div className="bg-red-300 px-2 w-2xl ">
 <div>the name is {props.name}</div>
 <div>the roll no of {props.name} is {props.rollno}</div>
 </div>
      </>
    );
  }
  
export default Cards;
  