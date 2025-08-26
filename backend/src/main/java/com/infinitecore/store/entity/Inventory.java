package com.infinitecore.store.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(schema = "sales", name = "inventory")
@NoArgsConstructor
public class Inventory {

    @Id
    @Column(name = "sku_id")
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId
    @JoinColumn(name = "sku_id")
    private Skus sku;

    @Min(value = 0, message = "Quantity available cannot be negative")
    @Column(nullable = false, name = "qty_available")
    private Integer qtyAvailable = 0;

    @Min(value = 0, message = "Quantity reserved cannot be negative")
    @Column(nullable = false, name = "qty_reserved")
    private Integer qtyReserved = 0;

}
