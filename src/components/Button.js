function Button(props){
    return(
        <div>
            <button className={props.styles}>{props.name}</button>
        </div>
    )
}

export default Button;