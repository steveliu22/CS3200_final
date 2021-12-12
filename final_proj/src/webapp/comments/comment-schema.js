export const commentSchema = {
  table: {
    name: 'comments',
    label: 'Comments'
  },
  fields: [
    {name: 'id', label: 'ID', readonly: true},
    {name: 'created', label: 'Date Commented'},
    {name: 'updated', label: 'Last Updated'},
    {name: 'post', label: 'Comment'},
    {name: 'likes', label: 'Likes'},
    {name: 'dislikes', label: 'Dislikes'},
  ]
};