// TODO: declare URL where server listens for HTTP requests
const URL = "http://localhost:8080/api/users";

export const findAllUsers = () =>
  fetch(`${URL}`)
    .then(response => response.json());

export const findUserById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const removeUser = (id) =>
  fetch(`${URL}/${id}/remove`);

export const createUser = (user) =>
    fetch(`${URL}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

//update a user by their ID
export const updateUser = (newUser) =>
  fetch(`${URL}`, {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: {
      'content-type': 'application/json'
    }
  });


//export all functions as the API to this service
export default {
  findAllUsers, findUserById, removeUser, createUser, updateUser,
}
