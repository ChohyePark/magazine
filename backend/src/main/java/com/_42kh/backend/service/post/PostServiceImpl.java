package com._42kh.backend.service.post;

import com._42kh.backend.config.auth.dto.SessionUser;
import com._42kh.backend.domain.post.Post;
import com._42kh.backend.domain.post.PostRepository;
import com._42kh.backend.domain.user.User;
import com._42kh.backend.domain.user.UserRepository;
import com._42kh.backend.web.post.dto.PostRequest;
import com._42kh.backend.web.post.dto.PostResponse;
import com._42kh.backend.web.post.dto.PostSaveResponse;
import com._42kh.backend.web.post.dto.PostUpdateResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public PostSaveResponse save(
        PostRequest postRequest,
        SessionUser sessionUser
    ) {
        User user = userRepository.findById(sessionUser.getUserId()).orElseThrow();

        Post post = postRequest.toEntity()
            .setUser(user);

        postRepository.save(post);
        return new PostSaveResponse(post);
    }

    @Override
    @Transactional()
    public PostResponse findById(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();
        post.incrementViewCount();

        return new PostResponse(post);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PostResponse> findAll() {
        List<Post> posts = postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdDate"));

        return posts.stream()
            .map(PostResponse::new)
            .toList();
    }

    @Override
    @Transactional
    public PostUpdateResponse update(
        Long postId,
        PostRequest postRequest,
        SessionUser sessionUser
    ) {
        User user = userRepository.findById(sessionUser.getUserId()).orElseThrow();
        Post post = postRepository.findById(postId).orElseThrow();

        post.validateUser(user)
            .setTitle(postRequest.getTitle())
            .setContents(postRequest.getContents())
            .setCategory(postRequest.getCategory());
        postRepository.save(post);
        return new PostUpdateResponse(post);
    }

    @Override
    @Transactional
    public void delete(
        Long postId,
        SessionUser sessionUser
    ) {
        User user = userRepository.findById(sessionUser.getUserId()).orElseThrow();
        Post post = postRepository.findById(postId).orElseThrow();

        post.validateUser(user);

        postRepository.delete(post);
    }
}
