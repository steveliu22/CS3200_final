import service, {findAllChannelsForUser} from "./service"
import {schema} from "./schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const RecordEditorScreen = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState({});
  const history = useHistory();
  let button1;
  let button2;

  const removeUser = () =>
      service.removeUser(id)
      .then(() => history.goBack())

  const findUserById = () =>
      service.findUserById(id)
      .then(user => setUser(user));
  if (id !== 'new') {
    useEffect(findUserById, []);

    button1 = <Link to={`/${id}/channels`}>
      <button type="button">
        Navigate to this User's Channels
      </button>
    </Link>

    button2 = <Link to={`/users/${id}/replies`}>
      <button type="button">
        Navigate to this User's Replies
      </button>
    </Link>
  }

  const updateLocalCopy = (event, field) => {
    const newValue = event.target.value;
    setUser({...user, [field.name]: newValue});
  }

  const saveUser = () =>
      service.updateUser(user).then(() => history.goBack());

  const createUser = () =>
      service.createUser(user)
      .then(() => history.goBack())

  return (
      <div>
        <h2>User Editor</h2>
        {
          schema.fields.map(field => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input value={user[field.name]}
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
        <button onClick={removeUser} className="btn btn-danger">Delete
        </button>
        <button onClick={saveUser} className="btn btn-primary">Save</button>
        <button onClick={createUser} className="btn btn-primary">Create</button>
      </div>
  )
}

export default RecordEditorScreen