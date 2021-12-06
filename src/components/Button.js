function Button(props){
    return(
        <div className={props.styles}>
            <button>{props.name}</button>
        </div>
    )
}

export default Button;