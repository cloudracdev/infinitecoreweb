package com.infinitecore.store.entity;

import com.infinitecore.store.enums.RoleEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Getter @Setter @RequiredArgsConstructor(access = lombok.AccessLevel.PROTECTED)
@Entity
@Table(schema = "auth", name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull(message = "Username can not be null")
    @Column(nullable = false, unique = true, name = "username")
    private String username;

    @NotNull(message = "Password can not be null")
    @Column(nullable = false, name = "password")
    private String password;

    @Column(nullable = false, name = "role")
    @Enumerated(EnumType.STRING)
    private RoleEnum role = RoleEnum.ROLE_CUSTOMER;

    @Column(name = "refresh_token")
    private String refreshToken;

    @Column(nullable = false, name = "is_active")
    private Boolean isActive = true;

    @CreationTimestamp
    @Column(nullable = false, updatable = false, name = "created_at")
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(nullable = false, name = "updated_at")
    private Timestamp updatedAt = createdAt;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.getDescription()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return isActive;
    }
}
