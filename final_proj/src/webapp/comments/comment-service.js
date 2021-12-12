const URL = "http://localhost:8080/api/comments";

export const findAllComments = () =>
  fetch(`${URL}`)
    .then(response => response.json());

export const findCommentById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const removeComment = (id) =>
  fetch(`${URL}/${id}/remove`);

export const createComment = (vid, comment) =>
    fetch(`http://localhost:8080/api/videos/${vid}/create`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

//update a comment by their ID
export const updateComment = (newComment) =>
  fetch(`${URL}`, {
    method: 'PUT',
    body: JSON.stringify(newComment),
    headers: {
      'content-type': 'application/json'
    }
  });

//export all functions as the API to this service
export default {
  findAllComments, findCommentById, removeComment, createComment, updateComment
}
