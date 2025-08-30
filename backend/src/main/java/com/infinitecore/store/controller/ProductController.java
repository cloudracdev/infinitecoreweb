package com.infinitecore.store.controller;

import com.infinitecore.store.controller.dto.product.ProductAddDTO;
import com.infinitecore.store.controller.dto.product.ProductResponseDTO;
import com.infinitecore.store.entity.Products;
import com.infinitecore.store.enums.CategoryEnum;
import com.infinitecore.store.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final ModelMapper mapper;

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts(@RequestParam @Valid CategoryEnum category) {
        return ResponseEntity.ok(productService.getAllProductsByCategory(category)
                .stream()
                .map(product -> mapper.map(product, ProductResponseDTO.class))
                .toList());
    }

    @PostMapping("/add")
    public ResponseEntity<ProductResponseDTO> addProduct(
            @RequestBody @Valid ProductAddDTO productAddDTO,
            Authentication authentication
    ) {
        Products product = productService.addProduct(productAddDTO, authentication);
        ProductResponseDTO responseDTO = mapper.map(product, ProductResponseDTO.class);

        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

}
