import React from 'react'

export default function Alert(props) {
  return (
    <>
        <div className={`container text-${props.f_color} alert alert-${props.alarm.type} alert-dismissible fade show mt-3 pb-0`} role="alert">
              <p><strong> <u>  Success!</u> </strong>{props.alarm.message}</p>
            <button type="button" className="btn-close" data-bs-dismiss ="alert" aria-label="Close"></button>
        </div>
    </>
  )
}
