

function Display(props){
    return (
        <div>
            <h1 className={props.styles}>{props.displayName}</h1>
        </div>
    )
}

export default Display;