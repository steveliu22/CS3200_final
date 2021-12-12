const URL = "http://localhost:8080/api/replies";

export const findAllReplies = () =>
  fetch(`${URL}`)
    .then(response => response.json());

export const findReplyById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const removeReply = (id) =>
  fetch(`${URL}/${id}/remove`);

export const createReply = (uid, cid, reply) =>
    fetch(`http://localhost:8080/api/replies/${uid}/${cid}/create`, {
      method: 'POST',
      body: JSON.stringify(reply),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

//update a reply by their ID
export const updateReply = (newReply) =>
  fetch(`${URL}`, {
    method: 'PUT',
    body: JSON.stringify(newReply),
    headers: {
      'content-type': 'application/json'
    }
  });

//export all functions as the API to this service
export default {
  findAllReplies, findReplyById, removeReply, createReply, updateReply
}
