package com.infinitecore.store.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(schema = "sales", name = "skus")
@NoArgsConstructor
public class Skus {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", unique = true, referencedColumnName = "id")
    private Variants variant;

    @Column(length = 60, nullable = false, name = "sku_code", unique = true)
    private String skuCode;

    @Column(length = 15, nullable = false)
    private String status = "ACTIVE";

}
