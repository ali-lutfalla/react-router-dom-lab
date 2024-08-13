
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailboxes List</h1>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li className='mail-box' >
                        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox{mailbox._id}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;