
const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback}  style={{ height: '50px', width: '170px' , marginTop: '0px'}}>{props.label}</button>
}

export default Button