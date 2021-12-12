package com.example.project.daos;
import com.example.project.model.Channel;
import com.example.project.model.Video;
import com.example.project.repositories.ChannelRepository;
import com.example.project.repositories.VideoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class VideoDao {
  @Autowired
  VideoRepository videoRepository;

  @Autowired
  ChannelRepository channelRepository;

  @GetMapping("/api/videos")
  public List<Video> findAllVideos() {
    return videoRepository.findAllVideos();
  }

  @GetMapping("/api/videos/{videoId}")
  public Video findVideoById(
      @PathVariable("videoId") Integer id) {
    return videoRepository.findVideoById(id);
  }

  @GetMapping("/api/videos/{videoId}/remove")
  public void deleteVideo(
      @PathVariable("videoId") Integer id) {
    videoRepository.deleteById(id);
  }

  @PostMapping("/api/videos")
  public Video createVideo(@RequestBody Video video) {
    return videoRepository.save(video);
  }

  @PostMapping("/api/channels/{cid}/create")
  public Video createVideoForChannel(@PathVariable("cid") Integer channelId,
      @RequestBody Video video) {
    video.setChannel(channelRepository.findChannelById(channelId));
    return videoRepository.save(video);
  }

  @GetMapping("/api/channels/{cid}/videos")
  public List<Video> findVideosFromChannel(@PathVariable("cid") Integer channelId) {
    return channelRepository.findChannelById(channelId).getVideos();
  }

  @PutMapping("/api/videos")
  public Video updateVideo(@RequestBody Video videoUpdates) {
    Video video = videoRepository.findVideoById(videoUpdates.getId());
    video.setTitle(videoUpdates.getTitle());
    video.setViews(videoUpdates.getViews());
    video.setUploadDate(videoUpdates.getUploadDate());
    video.setDescription(videoUpdates.getDescription());
    video.setLikes(videoUpdates.getLikes());
    video.setDislikes(videoUpdates.getDislikes());
    video.setLength(videoUpdates.getLength());
    video.setPublic(videoUpdates.isPublic());
    video.setCategory(videoUpdates.getCategory());
    return videoRepository.save(video);
  }

}
