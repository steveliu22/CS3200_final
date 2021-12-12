# Video Sharing Platform Database
Steve Liu

This project models a simple database implementation for a video sharing platform. Users on this platform will have the capability to manage multiple channels for
uploading and storing videos, comment on another user's video, reply to another user's comment, and like or dislike another user's comment or video.

# UML Diagram Representation
https://github.com/steveliu22/CS3200_final/blob/2b770860590f06bf67658c32f660ae55fbfc6424/PT1%20UML%20DIAGRAM.pdf

# How to Launch the User Interface:

These instructions are working under the assumption that you have already installed the latest version of IntelliJ IDEA and MySQL Database. 

Part 1: Installing the table onto your mySQL

1. Download and unzip or clone the entire repository onto a well known location on your computer.
1. Open up MySQL Workbench and navigate to any server. Open up the server, create a default schema if you haven't, and select the "Server" drop down menu button.
2. Under "Server" select "Data Import". 
3. Select "Import from Dump Project Folder" and ensure that the file path location is pointing to the db_design_finals_table folder.

Part 2: Opening up the User Interface

1. Open up IntelliJ IDEA. Select File and Open and navigate to where the final_proj folder is.
2. After opening up the final_proj folder, IntelliJ may ask whether or not you want to load scripts and whether or not you trust the file. Select load and yes to both of them.
3. Under final_proj navigate to src/main/resources/applications.properties. Replace YOUR_SCHEMA with the schema that you are working with and replace MY_USERNAME and MY_PASSWORD to whatever username and password of the database server you're is currently connected to.
4. Navigate to src/java/com.example.project/DemoApplications. Press the Green triangle next to the DemoApplication Class. Wait for the server to launch.
5. Lastly navigate to src/webapp/index.html. Right click the file, click 'Run index.html' and a browser window should pop up that displays the user interface.

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
Each user has the capability to create multiple channels. A user can also hold multiple channels.

# User to Comment (many-to-many)
Each user has the capability to make many comments on a single video and each comment can be replied to by many users.
It is reified by the Reply table where each individual User can Reply to many comments (one-to-many) and each Comment can have many Replies (another one-to-many).

# Channel to Video (one-to-many)
Each channel can hold many user uploaded videos. 

# Video to Comment (one-to-many)
Each video can hold many user comments.


