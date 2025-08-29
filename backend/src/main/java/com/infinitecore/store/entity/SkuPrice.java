package com.infinitecore.store.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(schema = "sales", name = "sku_price")
@NoArgsConstructor @Getter @Setter
public class SkuPrice {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sku_id", referencedColumnName = "id")
    private Skus sku;

    @NotNull(message = "Amount cannot be null")
    @PositiveOrZero(message = "Amount must be a positive value or zero")
    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal amount = BigDecimal.valueOf(0.00);

}
