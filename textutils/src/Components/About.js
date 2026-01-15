import React ,{useState} from 'react'

export default function About() {
const [text,settext]=useState("Disable Dark mode")
const [mystyle, setStyle] = useState({
  backgroundColor: "black",
  color: "white"
});
function ChangeColor() {
  if (mystyle.color=="white") {
      setStyle({
  backgroundColor: "white",
  color: "black"
 
});
 settext("Disable Light mode")
  }
else{
   setStyle({
  backgroundColor: "black",
  color: "white"
});
 settext("Disable Dark mode")

}

}



  return (
    <>
      <div className="container my-4"  style={mystyle}>

        <h1>About </h1>



        <div className="accordion" id="accordionExample">

          <div className="accordion-item">
            <h2 className="accordion-header"   id="headingOne">
              <button  style={mystyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={mystyle}>
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. You can modify any of this with custom CSS or overriding our default variables.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button  style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"   style={mystyle}>
                <strong>This is the second item’s accordion body.</strong> It is hidden by default. You can modify any of this with custom CSS or overriding our default variables.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button  style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div 
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={mystyle}>
                <strong>This is the third item’s accordion body.</strong> It is hidden by default. You can modify any of this with custom CSS or overriding our default variables.
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="containerr">

 <button className='btn btn-secondary my-4 ' onClick={ChangeColor}>{text}</button>  

      </div>
           

    </>)
}
