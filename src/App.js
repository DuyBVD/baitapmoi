import { useState } from "react";
import './App.css';

function App() {
  const [inputs, setInputs] = useState({});

  const suLi = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const suGui = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <form onSubmit={suGui}>
      <label>Tên đăng nhập:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={suLi}
      />
      </label>
      <label>Mật khẩu:
        <input 
          type="number"  
          value={inputs.number || ""} 
          onChange={suLi}
        />
        </label>
      <label>Nhập lại mật khẩu:
        <input 
          type="number"  
          value={inputs.number || ""} 
          onChange={suLi}
        />
        </label>
      <label>Họ và tên:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={suLi}
      />
      </label>
      <label>Email:
      <input 
        type="text; number" 
        name="username" 
        value={inputs.username || ""} 
        onChange={suLi}
      />
      </label>

        <input type="submit" />
    </form>
  );
}


export default App;
