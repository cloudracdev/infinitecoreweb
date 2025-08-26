package com.infinitecore.store.repository;

import com.infinitecore.store.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ImagesRepository extends JpaRepository<Images, UUID> {

}
