package com.example.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import java.util.Random;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "comments")
public class Comment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Date created;
  private Date updated;
  private String post;
  private int likes;
  private int dislikes;

  @ManyToOne
  @JsonIgnore
  private Video video;

  @OneToMany(mappedBy = "comment")
  private List<Reply> replies;

  public Comment(Integer id, Date created, Date updated, String post, int likes, int dislikes,
      Video video, List<Reply> replies) {
    this.id = id;
    this.created = created;
    this.updated = updated;
    this.post = post;
    this.likes = likes;
    this.dislikes = dislikes;
    this.video = video;
    this.replies = replies;
  }

  public Comment() {
    this.created = new Date(System.currentTimeMillis());
    this.updated = new Date(System.currentTimeMillis());
    this.post = "random post " + new Random().nextInt(200000);
    this.likes = 0;
    this.dislikes = 1;
  }

  public List<Reply> getReplies() {
    return replies;
  }

  public void setReplies(List<Reply> replies) {
    this.replies = replies;
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

  public String getPost() {
    return post;
  }

  public void setPost(String post) {
    this.post = post;
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

  public Video getVideo() {
    return video;
  }

  public void setVideo(Video video) {
    this.video = video;
  }

}
