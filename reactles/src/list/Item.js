const Item = ({name, handleDelete, id}) => {
    console.log(id)
    return (
        <li>{name} <button onClick={handleDelete}>Delete</button></li>
    )
}

export default Item