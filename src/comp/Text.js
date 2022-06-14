import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function Text(props) {
    let vert = () => {
        let x = tx.toUpperCase();
        set_tx(x);
    }
    let can = (event) => {
        set_tx(event.target.value);
    }
    let [tx, set_tx] = useState("Enter in the textbox");
    // //t = "hello"; // wrong way to change the variable
    // set_tx("hello"); // CORRECT way to change the variable t
    let copy = () => {
        let vari = document.getElementById('trrr');
        vari.select();
        // vari.setSelectionRange(0,99999); for mobile
        navigator.clipboard.writeText(vari.value);
        alert(vari.value);

    }
  return (
    <>
    <div className="container my-3 text-light">
    <label htmlFor="txt" className="form-label">{props.textLabel}</label>
    <textarea className="form-control text-light bg-dark" id='trrr' onChange={can} rows="3" value={tx}></textarea>
    <button className="btn btn-secondary my-1 form-control" onClick={vert}>Conversion</button>
    <button className="btn btn-secondary my-1 form-control" onClick={copy}>Copy</button>
    </div>
    </>
  );
}

Text.propTypes = {
    textLabel : propTypes.string
}