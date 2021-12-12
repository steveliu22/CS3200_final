export const schema = {
  table: {
    name: 'users',
    label: 'Users'
  },
  fields: [
    {name: 'id', label: 'ID', readonly: true},
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'username', label: 'Username'},
    {name: 'password', label: 'Password'},
    {name: 'email', label: 'E-mail'},
    {name: 'dateOfBirth', label: 'Date of Birth'},
    {name: 'profilePicture', label: 'Profile Picture'},
    {name: 'created', label: 'Date Created'},
  ]
};