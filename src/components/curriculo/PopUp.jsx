import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Curriculo from './Curriculo';
import "./PopUp.css";

function PopUp(){
    return (
        <Popup trigger={<button className='cv'> Ver Currículo <i class='bx bxs-file bx-sm curr' ></i></button>} modal >
            <div className='view'><Curriculo/></div>
        </Popup>
    )
}

export default PopUp;
