package com.d5data.ezbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class EzBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EzBackendApplication.class, args);
    }


}
