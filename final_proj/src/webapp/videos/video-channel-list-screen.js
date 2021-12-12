const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const VideoChannelListScreen = () => {

  const history = useHistory()
  const params = useParams();
  const [videos, setVideos] = useState([])

  const findAllVideosByChannelId = () =>
      fetch(`http://localhost:8080/api/channels/${params.id}/videos`)
      .then(res => res.json()).then(videos => setVideos(videos));
  useEffect(findAllVideosByChannelId, []);

  return (
      <div>
        <h2>Videos</h2>

        <button onClick={() => history.push(`/edit/videos/${params.id}/new`)}>
          Add {"New Video"}
        </button>


        <div className="list-group">

          {
            videos.map(video =>
                <Link to={`/edit/videos/${params.id}/${video.id}`}
                      className="list-group-item"
                      key={video.id}>

                  {video.title} {' '} ---

                  {video.category}


                </Link>
            )
          }

          <button onClick={() => history.goBack()}>
            Go Back
          </button>


        </div>
      </div>
  )
}

export default VideoChannelListScreen;