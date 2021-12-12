import service from "./channel-service"
import {channelSchema} from "./channel-schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ChannelEditorScreen = () => {
  const params = useParams();
  const id = params.id;
  const [channel, setChannel] = useState({});
  const history = useHistory();
  let button;

  const removeChannel = () =>
      service.removeChannel(id)
      .then(() => history.goBack())

  const findChannelById = () =>
      service.findChannelById(id)
      .then(channel => setChannel(channel));
  if (id !== 'new') {
    useEffect(findChannelById, []);

    button = <Link to={`/${id}/videos`}>
      <button type="button">
        Navigate to this Channel's Videos
      </button>
    </Link>
  }

  const updateLocalCopy = (event, field) => {
    const newValue = event.target.value;
    setChannel({...channel, [field.name]: newValue});
  }

  const saveChannel = () =>
      service.updateChannel(channel).then(() => history.goBack());

  const createChannel = () =>
      service.createChannel(params.uid, channel)
      .then(() => history.goBack())

  return (
      <div>
        <h2>Channel Editor</h2>

        {
          channelSchema.fields.map(field => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input value={channel[field.name]}
                       readOnly={field.readonly}
                       onChange={(event) =>
                           updateLocalCopy(event, field)}
                       className="form-control"/>
              </div>
          ))
        }

        {button}

        <br/>
        <button onClick={() => history.goBack()}
                className="btn btn-warning">Cancel
        </button>
        <button onClick={removeChannel} className="btn btn-danger">Delete
        </button>
        <button onClick={saveChannel} className="btn btn-primary">Save</button>
        <button onClick={createChannel} className="btn btn-primary">Create
        </button>
      </div>
  )
}

export default ChannelEditorScreen