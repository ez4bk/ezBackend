package com.d5data.ezbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/hello")
    public String sayHello(String username, String password) {
        if ("test".equals(username) && "123456".equals(password)) {
            return "Hello World!";
        } else {
            return "Invalid credentials!";
        }
    }
}
