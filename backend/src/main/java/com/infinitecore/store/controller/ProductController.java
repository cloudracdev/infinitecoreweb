package com.infinitecore.store.controller;

import com.infinitecore.store.controller.dto.ProductAddDTO;
import com.infinitecore.store.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(
            @RequestBody @Valid ProductAddDTO productAddDTO
    ) {
        return ResponseEntity.ok().build();
    }

}
