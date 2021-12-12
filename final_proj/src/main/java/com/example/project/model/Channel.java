package com.example.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "channels")
public class Channel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private int subscribers;
  private String description;
  private Date created;
  private int views;

  public Channel(Integer id, String name, int subscribers, String description, Date created,
      int view, User user, List<Video> videos) {
    this.id = id;
    this.name = name;
    this.subscribers = subscribers;
    this.description = description;
    this.created = created;
    this.views = view;
    this.user = user;
    this.videos = videos;
  }

  public Channel() {
    this.name = "Unnamed Channel #" + (long) new Random().nextInt(200000);
    this.created = new Date(System.currentTimeMillis());
  }

  @ManyToOne
  @JsonIgnore
  private User user;

  @OneToMany(mappedBy = "channel")
  private List<Video> videos;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public List<Video> getVideos() {
    return videos;
  }

  public void setVideos(List<Video> videos) {
    this.videos = videos;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getSubscribers() {
    return subscribers;
  }

  public void setSubscribers(int subscribers) {
    this.subscribers = subscribers;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }

  public int getViews() {
    return views;
  }

  public void setViews(int views) {
    this.views = views;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Transient
  public String getFirstName() {
    if(this.user == null) {
      return "";
    }
    else {
      return this.user.getFirstName();
    }
  }

}
