import React from 'react';

function UserDetalis(props) {
  return (
    <div>
      <div className='text-justify m-4 p-4'>
        <div>
          Name : {props.firstName} {props.lastName}
        </div>
        <div> Username : {props.userName}</div>
        <div> Email : {props.email}</div>
        <div> Phone Number : {props.phoneNumber}</div>
        <div>What'sApp Number : {props.whatsAppNumber}</div>
        <div> City : {props.city}</div>
        <div> State : {props.state}</div>
        <div> Pincode : {props.pinCode}</div>
      </div>
    </div>
  );
}

export default UserDetalis;
