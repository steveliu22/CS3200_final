import service from "./video-service";

const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const VideoListScreen = () => {

  const history = useHistory()
  const params = useParams()
  const [videos, setVideos] = useState([])

  const findAllVideos = () =>
      service.findAllVideos()
      .then(videos => setVideos(videos))

  useEffect(findAllVideos, []);

  return (
      <div>
        <h2>All Videos</h2>

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

          <button onClick={() => history.push(`/`)}>
            Go Back to All Users
          </button>


        </div>
      </div>
  )
}

export default VideoListScreen;