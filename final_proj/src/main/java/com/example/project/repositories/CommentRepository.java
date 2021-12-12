package com.example.project.repositories;
import com.example.project.model.Comment;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

  @Query(value = "SELECT * FROM comments",
      nativeQuery = true)
  List<Comment> findAllComments();

  @Query(value = "SELECT * FROM comments WHERE id=:commentId",
      nativeQuery = true)
  Comment findCommentById(@Param("commentId") Integer id);

}
