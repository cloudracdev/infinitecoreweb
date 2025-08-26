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
@Table(schema = "sales", name = "images")
@NoArgsConstructor
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sku_id", referencedColumnName = "id")
    private Skus sku;

    @NotNull(message = "Image URL cannot be null")
    @Column(nullable = false)
    private String url;

}
