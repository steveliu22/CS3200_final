import service from "../users/service";

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const UsersForReplyList = () => {

  const history = useHistory()
  const [users, setUsers] = useState([])

  const findAllUsers = () =>
      service.findAllUsers()
      .then(users => setUsers(users))

  useEffect(findAllUsers, []);

  return (
      <div>
        <h2>Who are you?</h2>


        <div className="list-group">

          {
            users.map(user =>
                <Link to={`/replies/users/comments/${user.id}`} className="list-group-item"
                      key={user.id}>

                  {user.firstName} {' '}

                  {user.lastName} {' '}

                  : {' '}

                  {user.email}

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

export default UsersForReplyList;