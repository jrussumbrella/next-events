import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div>
        <input type="email" name="email" />
      </div>
      <div>
        <input type="text" name="password" id="" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
