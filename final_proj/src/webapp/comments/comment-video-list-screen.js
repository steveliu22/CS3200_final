const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const CommentVideoListScreen = () => {

  const history = useHistory()
  const params = useParams();
  const [comments, setComments] = useState([])

  const findCommentsByVideoId = () =>
      fetch(`http://localhost:8080/api/videos/${params.id}/comments`)
      .then(res => res.json()).then(comments => setComments(comments));
  useEffect(findCommentsByVideoId, []);

  return (
      <div>
        <h2>Comments</h2>
        <button onClick={() => history.push(`/edit/comments/${params.id}/new`)}>
          Add {"New Comment"}
        </button>
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

          <button onClick={() => history.goBack()}>
            Go Back To This Comment's Video
          </button>
        </div>
      </div>
  )
}

export default CommentVideoListScreen;