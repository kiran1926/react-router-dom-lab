import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    boxOwner: "",
    boxSize: "Small",
};

const MailboxForm = (props) => {

    const [ formData, setFormData ] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate("/mailboxes");
    };

    return (
        <main>
            <h2>Create a New Mailbox</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="boxOwner">Enter a Boxholder: </label>
                <input type="text"
                        id="name"
                        name="boxOwner"
                        value={formData.name} 
                        onChange={handleChange}
                        />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

            <button type="submit">New Mailbox</button>
            </form>
        </main>
    );
};
export default MailboxForm;
