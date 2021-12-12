const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const CommentReplyListScreen = () => {

  const history = useHistory()
  const params = useParams();
  const [replies, setReplies] = useState([])

  const findAllRepliesByCommentId = () =>
      fetch(`http://localhost:8080/api/comments/${params.id}/replies`)
      .then(res => res.json()).then(replies => setReplies(replies));
  useEffect(findAllRepliesByCommentId, []);

  return (
      <div>
        <h2>All Replies</h2>

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

export default CommentReplyListScreen;