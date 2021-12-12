package com.example.project.repositories;
import com.example.project.model.Reply;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ReplyRepository extends CrudRepository<Reply, Integer> {

  @Query(value = "SELECT * FROM replies", nativeQuery = true)
  List<Reply> findAllReplies();

  @Query(value = "SELECT * FROM replies WHERE id=:replyId",
      nativeQuery = true)
  Reply findReplyById(@Param("replyId") Integer id);

}
