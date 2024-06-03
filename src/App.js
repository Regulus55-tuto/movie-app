import React, {useState} from 'react';

const App = () => {
    const [name, setName] = useState("1234")

    const changeName = () => {
        setName("5678")
    }

    return (
        <div>
            {name}
            <button onClick={() => changeName()}> 바꾸기 </button>
        </div>
    );
};

export default App;