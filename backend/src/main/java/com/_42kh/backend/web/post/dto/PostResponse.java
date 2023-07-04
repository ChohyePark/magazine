package com._42kh.backend.web.post.dto;

import com._42kh.backend.domain.post.Category;
import com._42kh.backend.domain.post.Post;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostResponse {

    private final Long id;
    private final String title;
    private final String contents;
    private final Category category;
    private final String author;
    private final String email;
    private final String picture;
    private final Long viewCount;
    private final LocalDateTime createdDate;
    private final LocalDateTime modifiedDate;

    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.contents = post.getContents();
        this.category = post.getCategory();
        this.author = post.getUser().getNickname();
        this.email = post.getUser().getEmail();
        this.picture = post.getUser().getPicture();
        this.viewCount = post.getViewCount();
        this.createdDate = post.getCreatedDate();
        this.modifiedDate = post.getModifiedDate();
    }
}
