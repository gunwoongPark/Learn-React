import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={inputs.name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={inputs.nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {inputs.name} ({inputs.nickname})
            </div>
        </div>
    )
}

export default InputSample