package com.infinitecore.store.controller.dto.product;

import com.infinitecore.store.enums.StatusEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class SkuResponseDTO {
    private String skuCode;
    private StatusEnum status;
    private List<ImagesResponseDTO> images;
    private BigDecimal priceAmount;
    private Integer inventoryQtyAvailable;
}
