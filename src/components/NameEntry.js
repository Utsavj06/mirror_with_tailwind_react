import Button from "./Button"

function NameEntry(props){
    return(
    <div className={`${props.styles}`}>
        <div className=" justify-items-center ">
            <div className="flex">
                <Button name={"Reset Name"}/>
                <Button name={"Add Name"}/>
            </div>
            <h2>{props.EnteredName}</h2>
            <input type="text" />
        </div>
    </div>
    )
}

export default NameEntry;