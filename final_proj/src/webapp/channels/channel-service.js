const URL = "http://localhost:8080/api/channels";

export const findAllChannels = () =>
  fetch(`${URL}`)
    .then(response => response.json());

export const findChannelById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const removeChannel = (id) =>
  fetch(`${URL}/${id}/remove`);

export const createChannel = (uid, channel) =>
    fetch(`http://localhost:8080/api/users/${uid}/create`, {
      method: 'POST',
      body: JSON.stringify(channel),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

//update a channel by their ID
export const updateChannel = (newChannel) =>
  fetch(`${URL}`, {
    method: 'PUT',
    body: JSON.stringify(newChannel),
    headers: {
      'content-type': 'application/json'
    }
  });

//export all functions as the API to this service
export default {
  findAllChannels, findChannelById, removeChannel, createChannel, updateChannel
}
