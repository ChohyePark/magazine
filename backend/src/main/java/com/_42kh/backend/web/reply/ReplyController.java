package com._42kh.backend.web.reply;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com._42kh.backend.service.reply.ReplyService;
import com._42kh.backend.web.reply.dto.ReplyRequest;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/replies")
public class ReplyController {

    private final ReplyService replySerivce;

    @PostMapping("/{post_id}")
    public Long save(
        @PathVariable("post_id") Long postId,
        @RequestBody ReplyRequest replyRequest
    ) {
        return replySerivce.save(postId, replyRequest);
    }

    @PutMapping("/{id}")
    public Long update(
        @PathVariable("id") Long id,
        @RequestBody ReplyRequest replyRequest
    ) {
        return replySerivce.update(id, replyRequest);
    }

    @DeleteMapping("/{id}")
    public Long delete(@PathVariable("id") Long id) {
        return replySerivce.delete(id);
    }
}