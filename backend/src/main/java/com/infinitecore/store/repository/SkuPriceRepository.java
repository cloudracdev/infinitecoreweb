package com.infinitecore.store.repository;

import com.infinitecore.store.entity.SkuPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SkuPriceRepository extends JpaRepository<SkuPrice, UUID> {

}
