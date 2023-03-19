import "./Table.scss";
import { useState } from "react";

const validate = (values) => {
    const errors = {}
    if(values.name && values.name[0].toUpperCase() !== values.name[0]){
        errors.name = 'First letter in the name field must be capital'
    }
    if(!values.name){
        errors.name = 'Name required'
    }
    if(!values.surname){
        errors.surname = 'Surname required'
    }
    if(!values.gi){
        errors.gi = 'General Info required'
    }
    if(!values.ei){
        errors.ei = 'Extra Info required'
    }
    return errors
}

const Table = () => {
  const [tableList, setTableList] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gi: "",
    ei: "",
  });
  const submit = (event) => {
    event.preventDefault()
    const e = validate(formData)
    console.log(e)
    if(JSON.stringify(e) !== "{}"){
        setErrors(e)
        return
    }
    setTableList((prev) => [...prev, {...formData, id:prev.length + 1}])
    setFormData({
        name: "",
        surname: "",
        gi: "",
        ei: "",
  })
}
  return (
    <div>
      <div className="list">List of something</div>
      <div className="form_container">
        <form id="input_form" onSubmit={submit}>
            {errors.name}
        <input className="input_btns" value={formData.name} onChange={(event)=>setFormData((prev)=>({...prev, name:event.target.value}))}/>
            {errors.surname}
          <input className="input_btns" value={formData.surname} onChange={(event)=>setFormData((prev)=>({...prev, surname:event.target.value}))}/>
            {errors.gi}
          <input className="input_btns" value={formData.gi} onChange={(event)=>setFormData((prev)=>({...prev, gi:event.target.value}))}/>
            {errors.ei}
          <input className="input_btns" value={formData.ei} onChange={(event)=>setFormData((prev)=>({...prev, ei:event.target.value}))}/>
          <input className="add" type="submit" value="Add" />
        </form>
      </div>
      <table>
        <thead>
          <tr className="raws">
            <th>id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>General info</th>
            <th>Extra info</th>
            <td>Check</td>
          </tr>
        </thead>
        <tbody>
          {tableList.map((item) => (
            <tr className="raws" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.gi}</td>
              <td>{item.ei}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="return_btns">
        <button>Edit</button>
        <button>Search</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Table;
