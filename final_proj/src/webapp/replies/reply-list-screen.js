import service from "./reply-service"

const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const ReplyListScreen = () => {

  const history = useHistory()
  const params = useParams()
  const [replies, setReplies] = useState([])

  const findAllReplies = () =>
      service.findAllReplies().then(replies => setReplies(replies));
  useEffect(findAllReplies, []);

  return (
      <div>
        <h2>All Replies</h2>
        <div className="list-group">

          {
            replies.map(reply =>
                <Link to={`/edit/replies/${params.uid}/${params.cid}/${reply.id}`}
                      className="list-group-item"
                      key={reply.id}>
                  {reply.reply} {' '}
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

export default ReplyListScreen;