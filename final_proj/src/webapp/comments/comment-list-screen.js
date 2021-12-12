import service from "./comment-service"

const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const CommentListScreen = () => {

  const history = useHistory()
  const params = useParams()
  const [comments, setComments] = useState([])

  const findAllComments = () =>
      service.findAllComments().then(comments => setComments(comments));
  useEffect(findAllComments, []);

  return (
      <div>
        <h2>All Comments</h2>
        <div className="list-group">

          {
            comments.map(comment =>
                <Link to={`/edit/comments/${params.id}/${comment.id}`}
                      className="list-group-item"
                      key={comment.id}>
                  {comment.post} {' '}
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

export default CommentListScreen;