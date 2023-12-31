package com._42kh.backend.web.user;

import com._42kh.backend.config.auth.LoginUser;
import com._42kh.backend.config.auth.dto.SessionUser;
import com._42kh.backend.service.user.UserService;
import com._42kh.backend.web.user.dto.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    @GetMapping
    public UserResponse getUser(@LoginUser SessionUser sessionUser) {
        return userService.getUser(sessionUser);
    }

    @DeleteMapping
    public void deleteUser(@LoginUser SessionUser sessionUser) {
        userService.deleteUser(sessionUser);
    }
}