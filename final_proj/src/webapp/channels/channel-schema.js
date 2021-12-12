export const channelSchema = {
  table: {
    name: 'channels',
    label: 'Channels'
  },
  fields: [
    {name: 'id', label: 'ID', readonly: true},
    {name: 'name', label: 'Channel Name'},
    {name: 'subscribers', label: 'Subscribers'},
    {name: 'description', label: 'Channel Description'},
    {name: 'created', label: 'Date Created'},
    {name: 'views', label: 'Total Views'},
  ]
};