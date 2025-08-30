package com.infinitecore.store.controller.dto.product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class VariantsResponseDTO {
    private String color;
    private String chip;
    private String ramGb;
    private String storageGb;
    private String screenSize;
    private String caseSizeMm;
    private SkuResponseDTO skus;
}
