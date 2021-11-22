# Video Sharing Platform Database
Steve Liu

This project models a simple database implementation for a video sharing platform. Users on this platform will have the capability to manage multiple channels for
uploading and storing videos, comment on another user's video, reply to another user's comment, and like or dislike another user's comment or video.

# UML Diagram Representation
https://github.com/steveliu22/CS3200_final/blob/2b770860590f06bf67658c32f660ae55fbfc6424/PT1%20UML%20DIAGRAM.pdf

# User:
The model that stores information for a single user account. Each user has a: 

- firstName : first name of the user  
- lastName : last name of the user 
- username : selected username of the user 
- password : selected password of the user
- email : selected e-mail of the user
- dateOfBirth : selected date of birth of the user
- profilePic : url link to the user's selected profile picture
- created : the date that the user's account was created

# Channel:
The model that represents a channel for users to upload onto. Each channel has a:

- name : name of the channel 
- subscribers : the number of other users that follow the channel
- description : a brief description of what the channel is about
- created : date the channel was created
- views : total number of users that have visited the channel

# Video
The model that represents a user uploaded video. Each video has a:

- title : the title of the video
- views: the total number of views of the video
- uploadDate: the date that the video was uploaded
- description: a brief description of what the video is about
- likes : the number of users that have liked this video
- dislikes : the number of users that have disliked this video
- length : the length of this video in minutes
- public : whether or not the video is public
- category : the general category that this video falls under 

# Comment 
The model that represents a user comment for a video. Each comment has a:

- created: the date that the comment was posted
- updated: the date that the comment was last updated
- post: the comment posted
- likes: the number of likes for this comment
- dislikes: the number of dislikes for this comment

# Reply
The model that represents a user reply to a comment. Each reply has a:

- created: the date that the reply was posted
- updated: the date that the reply was last updated
- reply: the reply posted
- likes: the number of likes for this reply
- dislikes: the number of dislikes for this reply

# Category Enumeration:
A Category is one of: 
EDUCATIONAL, MUSIC, HEALTH/FITNESS, COMEDY, COOKING, VLOG, GAMING, or MISCELLANEOUS and represents the types of videos that can be typically found uploaded to a video sharing platform. 


# User to Channel (one-to-many)
Each user has the capability to create multiple channels.

# User to Comment (many-to-many)
Each user has the capability to make many comments on a single video and each comment can be replied to by many users.

# Channel to Video (one-to-many)
Each channel can hold many user uploaded videos.

# Video to Comment (one-to-many)
Each video can hold many user comments.


