import './user.css';

const User = ({ id, email, name }) => (
    <div className="list">
        <span>{name}</span>
        <span>{email}</span>
        <span>{id}</span>
    </div>
);

export default User;
