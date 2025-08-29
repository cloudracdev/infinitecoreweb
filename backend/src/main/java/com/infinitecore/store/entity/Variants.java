package com.infinitecore.store.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(schema = "catalog", name = "variants")
@NoArgsConstructor
public class Variants {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Products product;

    @Column(length = 20)
    private String color;

    @Column(length = 20)
    private String chip;

    @Column(name = "ram_gb")
    private Integer ramGb;

    @Column(name = "storage_gb")
    private Integer storageGb;

    @PositiveOrZero(message = "Provide a valid screen size")
    @Column(precision = 4, scale = 2, name = "screen_size")
    private BigDecimal screenSize = BigDecimal.valueOf(0.00);

    @PositiveOrZero(message = "Provide a valid watch size")
    @Column(precision = 4, scale = 1, name = "case_size_mm")
    private BigDecimal caseSizeMm = BigDecimal.valueOf(0.0);

    @OneToOne(mappedBy = "variant", cascade = CascadeType.ALL, orphanRemoval = true)
    private Skus skus;

}
