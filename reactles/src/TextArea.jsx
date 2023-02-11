
const TextArea = (props) => {
    console.log(props.children)
    return (
        <textarea value={props.children} onChange={(event)=>{props.setText(event.target.value)}}/>
    )
}
export default TextArea