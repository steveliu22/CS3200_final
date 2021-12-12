import service from "./video-service"
import {videoSchema} from "./video-schema";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const VideoEditorScreen = () => {
  const params = useParams();
  const id = params.id;
  const [video, setVideo] = useState({});
  const history = useHistory();
  let button;

  const removeVideo = () =>
      service.removeVideo(id)
      .then(() => history.goBack())

  const findVideoById = () =>
      service.findVideoById(id)
      .then(video => setVideo(video));
  if (id !== 'new') {
    useEffect(findVideoById, []);

    button =  <Link to={`/${id}/comments`}>
      <button type="button">
        Navigate to this Video's Comments
      </button>
    </Link>
  }

  const updateLocalCopy = (event, field) => {
    const newValue = event.target.value;
    setVideo({...video, [field.name]: newValue});
  }

  const saveVideo = () =>
      service.updateVideo(video).then(() => history.goBack());

  const createVideo = () =>
      service.createVideo(params.cid, video)
      .then(() => history.goBack())

  return (
      <div>
        <h2>Video Editor</h2>

        {
          videoSchema.fields.map(field => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input value={video[field.name]}
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
        <button onClick={removeVideo} className="btn btn-danger">Delete
        </button>
        <button onClick={saveVideo} className="btn btn-primary">Save</button>
        <button onClick={createVideo} className="btn btn-primary">Create</button>
      </div>
  )
}

export default VideoEditorScreen