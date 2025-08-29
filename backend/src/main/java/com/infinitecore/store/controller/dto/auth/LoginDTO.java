package com.infinitecore.store.controller.dto.auth;

import jakarta.validation.constraints.NotNull;

public record LoginDTO(
        @NotNull(message = "Username must be provided") String username,
        @NotNull(message = "Password must be provided") String password
) {
}
