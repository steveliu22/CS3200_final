const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const ChannelUserListScreen = () => {

  const history = useHistory()
  const params = useParams();
  const [channels, setChannels] = useState([])

  const findChannelsByUserId = () =>
      fetch(`http://localhost:8080/api/users/${params.id}/channels`)
      .then(res => res.json()).then(channels => setChannels(channels));
  useEffect(findChannelsByUserId, []);

  return (
      <div>
        <h2>Channels</h2>
        <button onClick={() => history.push(`/edit/channels/${params.id}/new`)}>
          Add {"New Channel"}
        </button>
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

          <button onClick={() => history.goBack()}>
            Go Back To This Channel's User
          </button>
        </div>
      </div>
  )
}

export default ChannelUserListScreen;