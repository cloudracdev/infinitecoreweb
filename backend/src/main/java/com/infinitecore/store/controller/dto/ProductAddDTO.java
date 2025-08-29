package com.infinitecore.store.controller.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record ProductAddDTO(
        @NotNull(message = "Product name can not be null") String name,
        @Min(value = 2000, message = "Invalid model year, provide a valid year") Integer modelYear
) {
}
