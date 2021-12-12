import service from "./comment-service"
import {commentSchema} from "./comment-schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CommentEditorScreen = () => {
  const params = useParams();
  const id = params.id;
  const [comment, setComment] = useState({});
  const history = useHistory();
  let button1;

  const removeComment = () =>
      service.removeComment(id)
      .then(() => history.goBack())

  const findCommentById = () =>
      service.findCommentById(id)
      .then(comment => setComment(comment));
  if (id !== 'new') {
    useEffect(findCommentById, []);
    button1 = <Link to={`/comments/${id}/replies`}>
      <button type="button">
        Navigate to this Comment's Replies
      </button>
    </Link>
  }

  const updateLocalCopy = (event, field) => {
    const newValue = event.target.value;
    setComment({...comment, [field.name]: newValue});
  }

  const saveComment = () =>
      service.updateComment(comment).then(() => history.goBack());

  const createComment = () =>
      service.createComment(params.vid, comment)
      .then(() => history.goBack())

  return (
      <div>
        <h2>Comment Editor</h2>

        {
          commentSchema.fields.map(field => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input value={comment[field.name]}
                       readOnly={field.readonly}
                       onChange={(event) =>
                           updateLocalCopy(event, field)}
                       className="form-control"/>
              </div>
          ))
        }

        {button1}


        <br/>
        <button onClick={() => history.goBack()}
                className="btn btn-warning">Cancel
        </button>
        <button onClick={removeComment} className="btn btn-danger">Delete
        </button>
        <button onClick={saveComment} className="btn btn-primary">Save</button>
        <button onClick={createComment} className="btn btn-primary">Create</button>
      </div>
  )
}

export default CommentEditorScreen