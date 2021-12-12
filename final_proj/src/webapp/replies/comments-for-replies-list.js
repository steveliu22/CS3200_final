import service from "../comments/comment-service"

import moreService from "../reply-service"

const {useState, useEffect} = React;
const {Link, useHistory, useParams} = window.ReactRouterDOM;

const CommentsForReplyList = () => {

  const history = useHistory()
  const params = useParams()
  const [comments, setComments] = useState([])

  const findAllComments = () =>
      service.findAllComments().then(comments => setComments(comments));
  useEffect(findAllComments, []);

  return (
      <div>
        <h2>What comment would you like to reply to?</h2>
        <div className="list-group">

          {
            comments.map(comment =>
                <Link to={`/edit/replies/${params.uid}/${comment.id}/new`}
                      className="list-group-item"
                      key={comment.id}>
                  {comment.post} {' '}
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

export default CommentsForReplyList;