import React, { useState, useEffect } from 'react';

interface User {
    name: string;
    email: string;
}

interface Props {
    userId: string;
}

const UserData: React.FC<Props> = (props) => {
    const [user, setUser] = useState<User | null>(null);
    const [seconds, setSeconds] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetchUserData();
        const id = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        setIntervalId(id);
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [props.userId]);

    useEffect(() => {
        if (intervalId) return () => clearInterval(intervalId);
    }, [intervalId]);

    const fetchUserData = () => {
        fetch(`https://secret.url/user/${props.userId}`)
            .then((response) => response.json())
            .then((data: User) => setUser(data))
            .catch((error) => console.error('Error fetching user data:', error));
    };

    return (
        <div>
            <h1>User Data Component</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            <p>Timer: {seconds} seconds</p>
        </div>
    );
};

export default UserData;
