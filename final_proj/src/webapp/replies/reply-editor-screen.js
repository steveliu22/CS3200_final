import service from "./reply-service"
import {replySchema} from "./reply-schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ReplyEditorScreen = () => {
  const params = useParams();
  const id = params.id;
  const [reply, setReply] = useState({});
  const history = useHistory();
  let button1;
  let button2;

  const removeReply = () =>
      service.removeReply(id)
      .then(() => history.goBack())

  const findReplyById = () =>
      service.findReplyById(id)
      .then(reply => setReply(reply));
  if (id !== 'new') {
    useEffect(findReplyById, []);

    button1 = <Link to={`/edit/${reply.userId}`}>
      <button type="button">
        Navigate to this Reply's User
      </button>
    </Link>

    button2 = <Link to={`/edit/comments/${reply.commentVideoId}/${reply.commentId}`}>
      <button type="button">
        Navigate to this Reply's Comment
      </button>
    </Link>
  }

  const updateLocalCopy = (event, field) => {
    const newValue = event.target.value;
    setReply({...reply, [field.name]: newValue});
  }

  const saveReply = () =>
      service.updateReply(reply).then(() => history.goBack());

  const createReply = () =>
      service.createReply(params.uid, params.cid, reply)
      .then(() => history.push(`/replies`))

  return (
      <div>
        <h2>Reply Editor</h2>

        {
          replySchema.fields.map(field => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input value={reply[field.name]}
                       readOnly={field.readonly}
                       onChange={(event) =>
                           updateLocalCopy(event, field)}
                       className="form-control"/>
              </div>
          ))
        }

        {button1}
        {button2}

        <br/>
        <button onClick={() => history.goBack()}
                className="btn btn-warning">Cancel
        </button>
        <button onClick={removeReply} className="btn btn-danger">Delete
        </button>
        <button onClick={saveReply} className="btn btn-primary">Save</button>
        <button onClick={createReply} className="btn btn-primary">Create
        </button>
      </div>
  )
}

export default ReplyEditorScreen