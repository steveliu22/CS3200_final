package com.example.project.model;

import java.sql.Date;
import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private String username;
  private String password;
  private String email;
  private Date dateOfBirth;
  private String profilePicture;
  private Date created;


  @OneToMany(mappedBy = "user")
  private List<Channel> channels;

  @OneToMany(mappedBy = "user")
  private List<Reply> replies;

  public User(Integer userId, String firstName, String lastName, String userName,
      String password, String email, Date dateOfBirth, String profilePic, Date created,
      List<Channel> channels, List<Reply> replies) {
    this.id = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = userName;
    this.password = password;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.profilePicture = profilePic;
    this.created = created;
    this.channels = channels;
    this.replies = replies;
  }

  public User() {
    this.firstName = "user" + (long) new Random().nextInt(200000);
    this.lastName = "unknown";
    this.username = "unknown";
    this.password = "password";
    this.email = "unknown@unknown.com";
    this.dateOfBirth = new Date(System.currentTimeMillis());
    this.created = new Date(System.currentTimeMillis());
  }

  public Integer getId() {
    return this.id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String userName) {
    this.username = userName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public String getProfilePicture() {
    return profilePicture;
  }

  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }

  public List<Channel> getChannels() {
    return channels;
  }

  public void setChannels(List<Channel> channels) {
    this.channels = channels;
  }

  public List<Reply> getReplies() {
    return replies;
  }

  public void setReplies(List<Reply> replies) {
    this.replies = replies;
  }
}
