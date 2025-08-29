package com.infinitecore.store.service.auth;

import com.infinitecore.store.controller.dto.auth.LoginDTO;
import com.infinitecore.store.entity.User;
import com.infinitecore.store.repository.UserRepository;
import com.infinitecore.store.security.TokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authManager;
    private final TokenService tokenService;
    private final UserRepository userRepository;

    public String login(LoginDTO loginDTO) {
        log.info("Iniciando autenticacao, usuario: {}", loginDTO.username());

        UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(loginDTO.username(), loginDTO.password());
        Authentication auth = authManager.authenticate(authReq);
        User user = (User) auth.getPrincipal();

        return tokenService.generateAccessToken(user);
    }

}
