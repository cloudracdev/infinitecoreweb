package com.infinitecore.store.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class ProductResponseDTO {
    private String categoryName;
    private String name;
    private Integer modelYear;
    private List<VariantsResponseDTO> variants;
}
