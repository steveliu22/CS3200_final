package com.example.project.repositories;

import com.example.project.model.Channel;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ChannelRepository extends CrudRepository<Channel, Integer> {

  @Query(value = "SELECT * FROM channels",
      nativeQuery = true)
  List<Channel> findAllChannels();

  @Query(value = "SELECT * FROM channels WHERE id=:channelId",
      nativeQuery = true)
  Channel findChannelById(@Param("channelId") Integer id);

}
