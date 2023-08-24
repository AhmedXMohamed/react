import { useState, useEffect } from 'react';
import User from './User';

const JSONPlaceHolder = (props) => {
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    const [url, setURL] = useState("https://jsonplaceholder.typicode.com/users");

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h3>React crud using JSONPlaceholder</h3>
            <br /><br />
            <div>
                {
                    users.map(user => (
                        <User id={user.id} key={user.id} name={user.name} email={user.email}/>
                    ))
                }
            </div>
        </>
    );
}

export default JSONPlaceHolder;
