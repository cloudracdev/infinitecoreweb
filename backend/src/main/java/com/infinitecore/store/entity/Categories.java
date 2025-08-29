package com.infinitecore.store.entity;

import com.infinitecore.store.enums.CategoryEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter @Setter
@Entity
@Table(schema = "catalog", name = "categories")
@NoArgsConstructor
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull(message = "Category name cannot be null")
    @Enumerated(EnumType.STRING)
    @Column(length = 80, nullable = false)
    private CategoryEnum name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Products> product = new ArrayList<>();

}
