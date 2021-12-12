package com.example.project.daos;

import com.example.project.model.Reply;
import com.example.project.repositories.CommentRepository;
import com.example.project.repositories.ReplyRepository;
import com.example.project.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ReplyDao {

  @Autowired
  ReplyRepository replyRepository;

  @Autowired
  UserRepository userRepository;

  @Autowired
  CommentRepository commentRepository;

  @GetMapping("/api/replies")
  public List<Reply> findAllReplies() {
    return replyRepository.findAllReplies();
  }

  @GetMapping("/api/replies/{replyId}")
  public Reply findReplyById(
      @PathVariable("replyId") Integer id) {
    return replyRepository.findReplyById(id);
  }

  @GetMapping("/api/replies/{replyId}/remove")
  public void deleteReply(@PathVariable("replyId") Integer id) {
    replyRepository.deleteById(id);
  }

  @PostMapping("/api/replies")
  public Reply createReply(@RequestBody Reply reply) {
    return replyRepository.save(reply);
  }

  @PostMapping("/api/replies/{uid}/{cid}/create")
  public Reply createReply(@PathVariable("uid") Integer userId,
      @PathVariable("cid") Integer commentId, @RequestBody Reply reply) {
    reply.setUser(userRepository.findUserById(userId));
    reply.setComment(commentRepository.findCommentById(commentId));
    return replyRepository.save(reply);
  }


  @GetMapping("/api/comments/{cid}/replies")
  public List<Reply> findRepliesFromComment(@PathVariable("cid") Integer commentId) {
    return commentRepository.findCommentById(commentId).getReplies();
  }

  @GetMapping("/api/users/{uid}/replies")
  public List<Reply> findRepliesFromUser(@PathVariable("uid") Integer userId) {
    return userRepository.findUserById(userId).getReplies();
  }

  @PutMapping("/api/replies")
  public Reply updateReply(
      @RequestBody Reply replyUpdates) {
    Reply reply = replyRepository.findReplyById(replyUpdates.getId());
    reply.setCreated(replyUpdates.getCreated());
    reply.setUpdated(replyUpdates.getUpdated());
    reply.setReply(replyUpdates.getReply());
    reply.setLikes(replyUpdates.getLikes());
    reply.setDislikes(replyUpdates.getDislikes());
    return replyRepository.save(reply);
  }

}
