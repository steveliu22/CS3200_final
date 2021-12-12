package com.example.project.daos;

import com.example.project.model.Comment;
import com.example.project.model.Reply;
import com.example.project.model.User;
import com.example.project.model.Video;
import com.example.project.repositories.CommentRepository;
import com.example.project.repositories.VideoRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CommentDao {

  @Autowired
  CommentRepository commentRepository;

  @Autowired
  VideoRepository videoRepository;

  @GetMapping("/api/comments")
  public List<Comment> findAllComments() {
    return commentRepository.findAllComments();
  }

  @GetMapping("/api/comments/{commentId}")
  public Comment findCommentById(
      @PathVariable("commentId") Integer id) {
    return commentRepository.findCommentById(id);
  }

  @GetMapping("/api/comments/{commentId}/remove")
  public void deleteComment(@PathVariable("commentId") Integer id) {
    commentRepository.deleteById(id);
  }

  @PostMapping("/api/comments")
  public Comment createComment(@RequestBody Comment comment) {
    return commentRepository.save(comment);
  }

  @PostMapping("/api/videos/{vid}/create")
  public Comment createCommentForVideo(@PathVariable("vid") Integer videoId,
      @RequestBody Comment comment) {
    Video vid = videoRepository.findVideoById(videoId);
    comment.setVideo(vid);
    return commentRepository.save(comment);

  }

  @GetMapping("/api/videos/{vid}/comments")
  public List<Comment> findCommentsFromVideo(@PathVariable("vid") Integer videoId) {
    return videoRepository.findVideoById(videoId).getComments();
  }

  @PutMapping("/api/comments")
  public Comment updateComment(
      @RequestBody Comment commentUpdates) {
    Comment comment = commentRepository.findCommentById(commentUpdates.getId());
    comment.setCreated(commentUpdates.getCreated());
    comment.setUpdated(commentUpdates.getUpdated());
    comment.setPost(commentUpdates.getPost());
    comment.setLikes(commentUpdates.getLikes());
    comment.setDislikes(commentUpdates.getDislikes());
    return commentRepository.save(comment);
  }


  @GetMapping("/api/comments/{cid}/users")
  public List<User> findAllUsersFromComment(@PathVariable("cid") Integer commentId) {

    List<Reply> commentReplies = commentRepository.findCommentById(commentId).getReplies();
    List<User> allCommentUsers = new ArrayList<>();

    for(Reply r : commentReplies) {
      allCommentUsers.add(r.getUser());
    }

    return allCommentUsers;

  }
}
