import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function Text(props) {
    let vert = () => {
        if (typeof(tx) == "string") {
            var x = tx.toUpperCase();
            set_tx(x);
        }     
    }

    let can = (event) => {
        set_tx(event.target.value);
    }
    let [tx, set_tx] = useState("");
    // //t = "hello"; // wrong way to change the variable
    // set_tx("hello"); // CORRECT way to change the variable t
    let copy = () => {
        let vari = document.getElementById('trrr');
        vari.select();
        // vari.setSelectionRange(0,99999); for mobile
        navigator.clipboard.writeText(vari.value);
        alert(vari.value);
    }
    let clear = () => {
        set_tx("");
    }

    let wo = tx.split(" ").length;
    let back = function() {
        let v = document.getElementById('trrr').value;
        let c = v.substr(0, v.length-1);
        set_tx(c);
    }

  return (
    <>
    <div className="container my-3 text-light">
    <label htmlFor="txt" className={`form-label text-${props.colormode} fw-bold`}>{props.textLabel}</label>
    <textarea className={`form-control text-${props.colormode} bg-${props.backcolormode} border border-primary`} id='trrr' onChange={can} rows="3" autoFocus value={tx}></textarea>
    <button className={`btn btn-outline-primary mb-2 mt-2 mx-1 text-${props.colormode} fw-bold`} onClick={vert}>Conversion</button>
    <button className={`btn btn-outline-primary mb-2 mt-2 mx-1 text-${props.colormode} fw-bold`} onClick={copy}>Copy</button>
    <button className={`btn btn-outline-primary mb-2 mt-2 mx-1 text-${props.colormode} fw-bold`} onClick={clear}>Clear</button>
    <button className={`btn btn-outline-primary mb-2 mt-2 mx-1 text-${props.colormode} fw-bold`} onClick={back}>BackSpace</button>
    </div>
    <div className="container mb-3">
        <h5 className={`text-${props.colormode}`}>Your text Summary</h5>
        <h5 className={`text-${props.colormode}`}>{tx.length} characters and {wo} words</h5>
    </div>
    </>
  );
}

Text.propTypes = {
    textLabel : propTypes.string,
    colormode: propTypes.string,
    backcolormode: propTypes.string
}