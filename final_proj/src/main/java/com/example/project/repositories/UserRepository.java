package com.example.project.repositories;

import com.example.project.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Integer> {

  @Query(value = "SELECT * FROM users",
      nativeQuery = true)
  List<User> findAllUsers();

  @Query(value = "SELECT * FROM users WHERE id=:userId",
      nativeQuery = true)
  User findUserById(@Param("userId") Integer id);

}
