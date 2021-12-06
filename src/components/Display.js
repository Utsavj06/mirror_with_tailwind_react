

function Display(props){
    return (
        <div className={props.styles}>
            <h1>{props.displayName}</h1>
        </div>
    )
}

export default Display;