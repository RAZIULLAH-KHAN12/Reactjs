import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

const App = () => {
    return (
      <div>
        <h1>Registration Form</h1>
        <Form />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);