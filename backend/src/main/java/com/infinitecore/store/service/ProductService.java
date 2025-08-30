package com.infinitecore.store.service;

import com.infinitecore.store.controller.dto.ProductAddDTO;
import com.infinitecore.store.entity.*;
import com.infinitecore.store.enums.CategoryEnum;
import com.infinitecore.store.repository.*;
import jakarta.validation.constraints.Positive;
import org.springframework.transaction.annotation.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final CategoriesRepository categoryRepository;
    private final ProductsRepository productRepository;
    private final VariantsRepository variantsRepository;
    private final SkusRepository skusRepository;
    private final SkuPriceRepository skuPriceRepository;
    private final InventoryRepository inventoryRepository;
    private final ImagesRepository imagesRepository;

    private String getSkuKey(ProductAddDTO product, String categoryName) {
        String color = product.color() != null ? product.color().toUpperCase() : "NA";
        String chip = product.chip() != null ? product.chip().toUpperCase() : "NA";
        String stor = product.storageGb() != null ? product.storageGb() + "GB" : "NA";
        String ram = product.ramGb() != null ? product.ramGb() + "GB" : "NA";
        String screenSize = product.screenSize() != null ?
                product.screenSize() + "P" : "NA";
        String caseSizeMm = product.caseSizeMm() != null ?
                product.caseSizeMm() + "mm" : "NA";

        return "%s-%s-%s-%s-%s-%s-%s-%s".formatted(
                categoryName,
                product.name().replace(" ", "").toUpperCase(),
                color, stor, ram, chip, screenSize, caseSizeMm
        );
    }

    @Transactional
    public Products addProduct(@Valid ProductAddDTO productAddDTO, Authentication authentication) {
        Categories category = categoryRepository.findByName((productAddDTO.category()))
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        User user = (User) authentication.getPrincipal();

        Products product = new Products();
        product.setName(productAddDTO.name());
        product.setModelYear(productAddDTO.modelYear());
        product.setCategory(category);
        product.setUser(user);
        productRepository.save(product);

        Variants variant = new Variants();
        variant.setColor(productAddDTO.color());
        variant.setChip(productAddDTO.chip());
        variant.setRamGb(productAddDTO.ramGb());
        variant.setStorageGb(productAddDTO.storageGb());
        variant.setScreenSize(productAddDTO.screenSize());
        variant.setCaseSizeMm(productAddDTO.caseSizeMm());
        variant.setProduct(product);

        product.getVariants().add(variant);
        variantsRepository.save(variant);

        String skuCode = getSkuKey(productAddDTO, category.getName().name());
        Skus skus = new Skus();
        skus.setVariant(variant);
        skus.setSkuCode(skuCode);

        variant.setSkus(skus);
        skusRepository.save(skus);

        SkuPrice skuPrice = new SkuPrice();
        skuPrice.setAmount(productAddDTO.price());
        skuPrice.setSku(skus);

        skus.setPrice(skuPrice);
        skuPriceRepository.save(skuPrice);

        Inventory inventory = new Inventory();
        inventory.setQtyAvailable(productAddDTO.stock());
        inventory.setSku(skus);

        skus.setInventory(inventory);
        inventoryRepository.save(inventory);

        Images images = new Images();
        images.setUrl(productAddDTO.imageUrl());
        images.setSku(skus);

        skus.getImages().add(images);
        imagesRepository.save(images);

        return product;
    }

    public List<Products> getAllProductsByCategory(@Valid CategoryEnum category) {
        Categories cat = categoryRepository.findByName(category)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        return productRepository.findAllByCategoryName(cat.getName());
    }
}
