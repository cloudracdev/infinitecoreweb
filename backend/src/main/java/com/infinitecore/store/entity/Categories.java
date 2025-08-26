package com.infinitecore.store.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(schema = "catalog", name = "categories")
@NoArgsConstructor
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull(message = "Category name cannot be null")
    @Column(length = 80, nullable = false)
    private String name;

}
