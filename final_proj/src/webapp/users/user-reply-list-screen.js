const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const UserReplyListScreen = () => {

  const history = useHistory()
  const params = useParams();
  const [replies, setReplies] = useState([])

  const findAllRepliesByUserId = () =>
      fetch(`http://localhost:8080/api/users/${params.id}/replies`)
      .then(res => res.json()).then(replies => setReplies(replies));
  useEffect(findAllRepliesByUserId, []);

  return (
      <div>
        <h2>Reply History</h2>

        <div className="list-group">

          {
            replies.map(reply =>
                <Link to={`/edit/replies/${params.id}/${reply.id}`}
                      className="list-group-item"
                      key={reply.id}>

                  {reply.reply} {' '} : {' '}
                  {reply.updated}


                </Link>
            )
          }

          <button onClick={() => history.goBack()}
                  className="btn btn-warning">Go Back
          </button>

        </div>
      </div>
  )
}

export default UserReplyListScreen;