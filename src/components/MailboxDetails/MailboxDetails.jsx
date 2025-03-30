import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const mailboxFound = props.mailboxes.find(
    (mailbox) => mailbox._id === parseInt(mailboxId)
  );

  if (!mailboxFound) {
    return <h2>Mailbox not found</h2>;
  }

  return (
    <>
      <h2>Mailbox{mailboxFound._id}</h2>
      <h3>Details: </h3>
      <dl className="mail-box">
        <div>
          <dt>Box Owner:</dt>
          <dd>{mailboxFound.boxOwner}</dd>
        </div>
        <div>
          <dt>Box Size:</dt>
          <dd>{mailboxFound.boxSize}</dd>
        </div>
      </dl>
    </>
  );
};

export default MailboxDetails;