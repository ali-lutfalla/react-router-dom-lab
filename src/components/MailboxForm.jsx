import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {

    const initialState = {
        boxholder: '',
        boxSize: 'Small'
    };


    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        navigate('/mailboxes');
        setFormData(initialState);
    };


    return (
        <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxholder">Boxholder: </label>
            <input type="text" name="boxholder" value={formData.boxholder} onChange={handleChange} />
            <label htmlFor="boxSize">Box size:</label>
            <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        </>
    )
};

export default MailboxForm;