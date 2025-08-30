package com.infinitecore.store.repository;

import com.infinitecore.store.entity.Products;
import com.infinitecore.store.enums.CategoryEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductsRepository extends JpaRepository<Products, UUID> {

    List<Products> findAllByCategoryName(CategoryEnum categoryName);
}
