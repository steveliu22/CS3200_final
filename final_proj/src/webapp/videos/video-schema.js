export const videoSchema = {
  table: {
    name: 'videos',
    label: 'Videos'
  },
  fields: [
    {name: 'id', label: 'ID', readonly: true},
    {name: 'title', label: 'Video Title'},
    {name: 'views', label: 'Total Views'},
    {name: 'uploadDate', label: 'Date Uploaded'},
    {name: 'description', label: 'Description'},
    {name: 'likes', label: 'Likes'},
    {name: 'dislikes', label: 'Dislikes'},
    {name: 'public', label: 'Public'},
    {name: 'category', label: 'Video Category'},
  ]
};