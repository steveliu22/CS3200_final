export const replySchema = {
  table: {
    name: 'replies',
    label: 'Replies'
  },
  fields: [
    {name: 'id', label: 'ID', readonly: true},
    {name: 'created', label: 'Date Replied'},
    {name: 'updated', label: 'Last updated'},
    {name: 'reply', label: 'Reply'},
    {name: 'dislikes', label: 'Dislikes'},
    {name: 'likes', label: 'Likes'},
  ]
};