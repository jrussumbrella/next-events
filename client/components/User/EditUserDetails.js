import React from 'react';

const EditUserDetails = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
      </form>
    </div>
  );
};

export default EditUserDetails;
