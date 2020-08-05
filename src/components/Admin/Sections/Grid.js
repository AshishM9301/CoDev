import React, { useState } from 'react';
import UserDetalis from './UserDetalis';

function Grid(props) {
  const [Details, setDetails] = useState(false);

  const toggleDetailView = () => {
    setDetails(!Details);
  };
  return (
    <div>
      <div className='container mx-auto '>
        <button
          onClick={toggleDetailView}
          className='border-2 flex justify-between w-full p-4 my-4 rounded-lg border-gray-400'>
          <div className='text-2xl' key={props.keyValue}>
            {props.firstName} {props.lastName} has
            {props.role === 2 ? ' Filled the Form' : ' Not Filled the Form'}
            {Details && (
              <UserDetalis
                firstName={props.firstName}
                lastName={props.lastName}
                email={props.email}
                role={props.role}
                userName={props.userName}
                phoneNumber={props.phoneNumber}
                whatsAppNumber={props.phoneNumber}
                city={props.city}
                state={props.city}
                pinCode={props.pinCode}
              />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Grid;
