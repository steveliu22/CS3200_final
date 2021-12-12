package com.example.project.repositories;
import com.example.project.model.Video;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface VideoRepository extends CrudRepository<Video, Integer> {

  @Query(value = "SELECT * FROM videos",
      nativeQuery = true)
  List<Video> findAllVideos();

  @Query(value = "SELECT * FROM videos WHERE id=:videoId",
      nativeQuery = true)
  Video findVideoById(@Param("videoId") Integer id);

}
