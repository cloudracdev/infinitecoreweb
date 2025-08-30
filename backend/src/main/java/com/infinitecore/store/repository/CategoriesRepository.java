package com.infinitecore.store.repository;

import com.infinitecore.store.entity.Categories;
import com.infinitecore.store.enums.CategoryEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CategoriesRepository extends JpaRepository<Categories, UUID> {

    Optional<Categories> findByName(CategoryEnum name);
}
