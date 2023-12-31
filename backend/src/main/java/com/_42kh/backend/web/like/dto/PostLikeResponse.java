package com._42kh.backend.web.like.dto;

import lombok.Getter;

@Getter
public class PostLikeResponse {

    private final Boolean isLike;
    private final Long count;

    public PostLikeResponse(
        Boolean isLike,
        Long count
    ) {
        this.isLike = isLike;
        this.count = count;
    }
}
