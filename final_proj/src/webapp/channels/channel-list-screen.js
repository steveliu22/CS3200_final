import service from "./channel-service"

const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const ChannelListScreen = () => {

  const history = useHistory()
  const params = useParams()
  const [channels, setChannels] = useState([])

  const findAllChannels = () =>
      service.findAllChannels().then(channels => setChannels(channels));
  useEffect(findAllChannels, []);

  return (
      <div>
        <h2>All Channels</h2>
        <div className="list-group">

          {
            channels.map(channel =>
                <Link to={`/edit/channels/${params.id}/${channel.id}`}
                      className="list-group-item"
                      key={channel.id}>
                  {channel.name} {' '}
                </Link>
            )
          }

          <button onClick={() => history.push(`/`)}>
            Go Back To All Users
          </button>
        </div>
      </div>
  )
}

export default ChannelListScreen;