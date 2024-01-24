import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/AuthForm';

function  AuthenticationPage() {
  return <AuthForm />;
}
// rkhan@gmail.com Rkhan@123

export default AuthenticationPage;

//This action method will be triggered whenever this AuthForm is submitted 
export async function action({request, params}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if(mode !== 'login' && mode !== 'signup'){
    throw json({message: 'Unsupported mode.'}, {status: 422});
  }

  const data = await request.formData() //This hold form data
  const authData = {
    email: data.get('email'), //This get method is exit in data object taht is return by formData
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(authData),
  });

  if(response.status === 422 || response.status === 401) {
    console.log("response", response);
    return response; //React router automatically extract data for us
  }

  if(!response.ok){
    throw json({message: "Could not authenticate user."}, {status: 500})
  }

  //soon: manage that token
  const resData = await response.json();
  // console.log('resData', resData);
  const token = resData.token;

  localStorage.setItem('token', token); 
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}