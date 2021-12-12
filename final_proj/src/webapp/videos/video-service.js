const URL = "http://localhost:8080/api/videos";

export const findAllVideos = () =>
  fetch(`${URL}`)
    .then(response => response.json());

export const findVideoById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const removeVideo = (id) =>
  fetch(`${URL}/${id}/remove`);

export const createVideo = (cid, video) =>
    fetch(`http://localhost:8080/api/channels/${cid}/create`, {
      method: 'POST',
      body: JSON.stringify(video),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

//update a video by their ID
export const updateVideo = (newVideo) =>
  fetch(`${URL}`, {
    method: 'PUT',
    body: JSON.stringify(newVideo),
    headers: {
      'content-type': 'application/json'
    }
  });

//export all functions as the API to this service
export default {
  findAllVideos, findVideoById, removeVideo, createVideo, updateVideo
}
