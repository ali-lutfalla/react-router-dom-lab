import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  if (!selectedBox)
    return (
      <div>
        <h1>Mailbox Not Found!</h1>
      </div>
    );
  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
