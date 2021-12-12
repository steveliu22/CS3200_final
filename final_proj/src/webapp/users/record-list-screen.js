import service from "./service";

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const RecordListScreen = () => {

  const history = useHistory()
  const [users, setUsers] = useState([])

  const findAllUsers = () =>
      service.findAllUsers()
      .then(users => setUsers(users))

  useEffect(findAllUsers, []);

  return (
      <div>
        <h2>Video Platform Users</h2>

        <button onClick={() => history.push("/edit/new")}>
          Add {"New User"}
        </button>

        <Link to={`/channels`}>
          <button type="button">
            Navigate to All Channels
          </button>
        </Link>

        <Link to={`/videos`}>
          <button type="button">
            Navigate to All Videos
          </button>
        </Link>

        <Link to={`/comments`}>
          <button type="button">
            Navigate to All Comments
          </button>
        </Link>

        <Link to={`/replies`}>
          <button type="button">
            Navigate to All Replies
          </button>
        </Link>

        <Link to={`/replies/users/comments`}>
          <button type="button">
            Reply to a Comment
          </button>
        </Link>


        <div className="list-group">

          {
            users.map(user =>
                <Link to={`/edit/${user.id}`} className="list-group-item"
                      key={user.id}>

                  {user.firstName} {' '}

                  {user.lastName} {' '}

                  : {' '}

                  {user.email}

                </Link>
            )
          }



        </div>
      </div>
  )
}

export default RecordListScreen;