
import React from 'react-dom'

export function Driver(props) {
  const { picture: { thumbnail }, name, cell, gender, dob} = props.data;
  return (
    <div>
      <div>
        <img src={thumbnail} alt="driver" />
      </div>
      <div>
        <div>
          <label>Name</label>
          <span>{name.title}&nbsp;{name.first}&nbsp;{name.last}</span>
        </div>
        <div>
          <label>Gender</label>
          <span>{gender}</span>
        </div>
        <div>
          <label>Age</label>
          <span>{dob.age}</span>
        </div>
        <div>
          <label>Mobile</label>
          <span>{cell}</span>
        </div>
      </div>
    </div>
  );
}