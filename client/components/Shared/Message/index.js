import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="message">
      {message}
      <style>{`
    .message {
        
    }
`}</style>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
