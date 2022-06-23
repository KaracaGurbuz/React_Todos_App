import { useState } from "react";
function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");
  const onChangeInput = (e) => {
    setForm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      alert("Bir Görev Ekleyin!");
      return false;
    }
    setTodos([
      ...todos,
      { text: form, completed: false, id: Math.random() * 1000 },
    ]);
    setForm("");
    // console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={form}
          onChange={onChangeInput}
          placeholder="What needs to be done?"
        ></input>
      </form>
    </div>
  );
}
export default Form;
