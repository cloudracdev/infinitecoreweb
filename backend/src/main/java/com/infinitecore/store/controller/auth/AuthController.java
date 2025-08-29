package com.infinitecore.store.controller.auth;

import com.infinitecore.store.controller.dto.auth.LoginDTO;
import com.infinitecore.store.controller.dto.auth.TokenResponseDTO;
import com.infinitecore.store.service.auth.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    @PostMapping(value = "/login")
    public ResponseEntity<TokenResponseDTO> login(@RequestBody @Valid LoginDTO loginDTO) {
        String token = service.login(loginDTO);

        return ResponseEntity.ok(new TokenResponseDTO(token));
    }

}
