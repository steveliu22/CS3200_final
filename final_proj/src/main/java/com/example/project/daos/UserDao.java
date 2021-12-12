package com.example.project.daos;

import com.example.project.model.Comment;
import com.example.project.model.Reply;
import com.example.project.model.User;
import com.example.project.repositories.CommentRepository;
import com.example.project.repositories.UserRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserDao {
  @Autowired
  UserRepository userRepository;

  @Autowired
  CommentRepository commentRepository;

  @GetMapping("/api/users")
  public List<User> findAllUsers() {
    return userRepository.findAllUsers();
  }

  @GetMapping("/api/users/{userId}")
  public User findUserById(
      @PathVariable("userId") Integer id) {
    return userRepository.findUserById(id);
  }

  @GetMapping("/api/users/{userId}/remove")
  public void deleteUser(
      @PathVariable("userId") Integer id) {
    userRepository.deleteById(id);
  }

  @PostMapping("/api/users")
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }


  @PutMapping("/api/users")
  public User updateUser(
      @RequestBody User userUpdates) {
    User user = userRepository.findUserById(userUpdates.getId());
    user.setFirstName(userUpdates.getFirstName());
    user.setLastName(userUpdates.getLastName());
    user.setUsername(userUpdates.getUsername());
    user.setPassword(userUpdates.getPassword());
    user.setEmail(userUpdates.getEmail());
    user.setDateOfBirth(userUpdates.getDateOfBirth());
    user.setProfilePicture(userUpdates.getProfilePicture());
    user.setCreated(userUpdates.getCreated());
    return userRepository.save(user);
  }
}
