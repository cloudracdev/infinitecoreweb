package com.infinitecore.store.controller.dto;

import com.infinitecore.store.enums.CategoryEnum;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record ProductAddDTO(
        @NotNull(message = "Category can not be null") CategoryEnum category,
        @NotNull(message = "Product name can not be null") String name,
        @Min(value = 2000, message = "Invalid model year, provide a valid year") Integer modelYear,
        String color,
        String chip,
        @Positive Integer ramGb,
        @Positive Integer storageGb,
        @Positive BigDecimal screenSize,
        @Positive BigDecimal caseSizeMm,
        @NotNull(message = "Inform a price") @Positive BigDecimal price,
        @NotNull(message = "Provide the stock value") @Positive Integer stock,
        @NotNull(message = "Provide an image URL") String imageUrl
        ) {
}
