package com.example.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.Random;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "replies")
public class Reply {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Date created;
  private Date updated;
  private String reply;
  private int likes;
  private int dislikes;

  @ManyToOne
  @JsonIgnore
  private User user;

  @ManyToOne
  @JsonIgnore
  private Comment comment;

  public Reply(Integer id, Date created, Date updated, String reply, int likes, int dislikes,
      User user, Comment comment) {
    this.id = id;
    this.created = created;
    this.updated = updated;
    this.reply = reply;
    this.likes = likes;
    this.dislikes = dislikes;
    this.user = user;
    this.comment = comment;
  }

  public Reply() {
    this.created = new Date(System.currentTimeMillis());
    this.updated = new Date(System.currentTimeMillis());
    this.reply = "random reply" + new Random().nextInt(20000);
    this.likes = 0;
    this.dislikes = 0;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }

  public Date getUpdated() {
    return updated;
  }

  public void setUpdated(Date updated) {
    this.updated = updated;
  }

  public String getReply() {
    return reply;
  }

  public void setReply(String reply) {
    this.reply = reply;
  }

  public int getLikes() {
    return likes;
  }

  public void setLikes(int likes) {
    this.likes = likes;
  }

  public int getDislikes() {
    return dislikes;
  }

  public void setDislikes(int dislikes) {
    this.dislikes = dislikes;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Comment getComment() {
    return comment;
  }

  public void setComment(Comment comment) {
    this.comment = comment;
  }

  @Transient
  public Integer getUserId() {
    return user.getId();
  }

  @Transient
  public Integer getCommentId() {
    return comment.getId();
  }

  @Transient
  public Integer getCommentVideoId() {
    return comment.getVideo().getId();
  }
}
