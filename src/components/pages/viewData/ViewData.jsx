import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

function ViewData () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    /*
    useEffect(() => {
        console.log(userData);
        if(userData.user === null) {
            console.log('userData.user is null');
            {console.log("NUll")}
            history.push('/');
        }
    }, [userData.user, history]);
    */

    const click = () => {
        // get data from "http://localhost:5000/customers/msg"
        //axios.get("http://localhost:5000/customers/msg")
        //  .then((res) => res.json())
        /*fetch("https://covid-pro-web-backend-9gstw24hc-timnirmal.vercel.app/customers/msg")
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                let authors = data.results;
                return authors.map(function(author) {
                    return (
                        <div>
                            <h1>{author.msg}</h1>
                        </div>
                    );
                });
            })

            .catch(function(error) {
                console.log(error);
            });*/
        fetch('https://covid-pro-web-backend-9gstw24hc-timnirmal.vercel.app/customers/msg', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "firstName": "Marcos",
                "lastName": "Silva",
                "email": "marcos.henrique@toptal.com",
                "password": "s3cr3tp4sswo4rd"
            })
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Request succeeded with JSON response', data);
                console.log(new Date().toISOString());
            })
            .catch(function(error) {
                console.log('Request failed', error);
            });
        // iosdate now

    }

    return (
        <div>
            {/*{userData.user ? (*/}
                <div className="FaceMask">
                    {console.log("Mask")}
                    {console.log(userData.user)}
                    <h1>View Data</h1><br/><br/>
                    <a className="btn btn-primary" href="/stafflist" role="button"> Staff Info </a><br/><br/>
                    <a className="btn btn-primary" href="/customerlist" role="button"> Customer Data </a><br/><br/>
                    <a className="btn btn-primary" href="/covidcases" role="button"> Potential Covid Cases </a><br/><br/>
                    <a className="btn btn-primary" href="/dailyreport" role="button"> Daily Report </a><br/><br/>
                    <button className="btn btn-outline-warning float-right" onClick={click}>Reject</button>

                </div>
            {/*} ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )
            }*/}
        </div>
    );
}

export default ViewData;