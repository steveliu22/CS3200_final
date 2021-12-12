package com.example.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import java.util.Random;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "videos")
public class Video {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String title;
  private int views;
  private Date uploadDate;
  private String description;
  private int likes;
  private int dislikes;
  private int length;
  @Column(columnDefinition = "tinyint(1) default 1")
  private boolean isPublic;
  @Column(columnDefinition =
      "ENUM('EDUCATIONAL', 'MUSIC', 'HEALTH/FITNESS', 'COMEDY', 'COOKING', 'VLOG', 'GAMING', "
          + "'MISCELLANEOUS'")
  @Enumerated(EnumType.STRING)
  private Category category;

  @ManyToOne
  @JsonIgnore
  private Channel channel;

  @OneToMany (mappedBy = "video")
  private List<Comment> comments;

  public Video(Integer id, String title, int views, Date uploadDate, String description, int likes,
      int dislikes, int length, boolean isPublic, Category category,
      Channel channel, List<Comment> comments) {
    this.id = id;
    this.title = title;
    this.views = views;
    this.uploadDate = uploadDate;
    this.description = description;
    this.likes = likes;
    this.dislikes = dislikes;
    this.length = length;
    this.isPublic = isPublic;
    this.category = category;
    this.channel = channel;
    this.comments = comments;
  }

  public Video() {
    this.title = "Random video #" + new Random().nextInt(200000);
    this.views = 0;
    this.description = "";
    this.likes = 0;
    this.dislikes = 0;
    this.length = 0;
    this.uploadDate = new Date(System.currentTimeMillis());
    this.isPublic = false;
    this.category = Category.EDUCATIONAL;
  }


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getViews() {
    return views;
  }

  public void setViews(int views) {
    this.views = views;
  }

  public Date getUploadDate() {
    return uploadDate;
  }

  public void setUploadDate(Date uploadDate) {
    this.uploadDate = uploadDate;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
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

  public int getLength() {
    return length;
  }

  public void setLength(int length) {
    this.length = length;
  }

  public boolean isPublic() {
    return isPublic;
  }

  public void setPublic(boolean aPublic) {
    isPublic = aPublic;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public Channel getChannel() {
    return channel;
  }

  public void setChannel(Channel channel) {
    this.channel = channel;
  }


  public List<Comment> getComments() {
    return comments;
  }

  public void setComments(List<Comment> comments) {
    this.comments = comments;
  }



}
