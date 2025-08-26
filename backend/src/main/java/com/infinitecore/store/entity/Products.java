package com.infinitecore.store.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(schema = "catalog", name = "products")
@NoArgsConstructor
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Categories category;

    @NotNull(message = "Product name cannot be null")
    @Column(nullable = false, length = 50)
    private String name;

    @NotNull(message = "Product model year cannot be null")
    @Column(nullable = false, name = "model_year")
    private Integer modelYear;

    @Column(name = "created_at", updatable = false, nullable = false, insertable = false)
    @CreationTimestamp
    private Timestamp createdAt;

    @Column(name = "updated_at", insertable = false)
    @UpdateTimestamp
    private Timestamp updatedAt = createdAt;

}
