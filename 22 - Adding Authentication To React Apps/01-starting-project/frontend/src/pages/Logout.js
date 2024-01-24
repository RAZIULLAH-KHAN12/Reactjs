import { redirect } from "react-router-dom";
//This is regular js file not a react component
export function action() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    // alert('Logout Successfully!');
    return redirect('/');
}