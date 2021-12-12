package com.example.project.daos;

import com.example.project.model.Channel;
import com.example.project.repositories.ChannelRepository;
import com.example.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ChannelDao {
  @Autowired
  UserRepository userRepository;
  @Autowired
  ChannelRepository channelRepository;

  @GetMapping("/api/channels")
  public List<Channel> findAllChannels() {
    return channelRepository.findAllChannels();
  }

  @GetMapping("/api/channels/{channelId}")
  public Channel findChannelById(
      @PathVariable("channelId") Integer id) {
    return channelRepository.findChannelById(id);
  }

  @GetMapping("/api/channels/{channelId}/remove")
  public void deleteChannel(
      @PathVariable("channelId") Integer id) {
    channelRepository.deleteById(id);
  }

  @PostMapping("/api/channels")
  public Channel createChannel(@RequestBody Channel channel) {
    return channelRepository.save(channel);
  }

  @PostMapping("/api/users/{uid}/create")
  public Channel createChannelForUser(@PathVariable("uid") Integer userId,
      @RequestBody Channel channel ) {
    channel.setUser(userRepository.findUserById(userId));
    return channelRepository.save(channel);
  }

  @GetMapping("/api/users/{uid}/channels")
  public List<Channel> findChannelsFromUser(@PathVariable("uid") Integer userId) {
    return userRepository.findUserById(userId).getChannels();
  }

  @PutMapping("/api/channels")
  public Channel updateChannel(
      @RequestBody Channel channelUpdates) {
    Channel channel = channelRepository.findChannelById(channelUpdates.getId());
    channel.setName(channelUpdates.getName());
    channel.setSubscribers(channelUpdates.getSubscribers());
    channel.setDescription(channelUpdates.getDescription());
    channel.setCreated(channelUpdates.getCreated());
    channel.setViews(channelUpdates.getViews());
    return channelRepository.save(channel);
  }
}
