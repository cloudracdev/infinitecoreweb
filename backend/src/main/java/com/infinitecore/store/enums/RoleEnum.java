package com.infinitecore.store.enums;

import lombok.Getter;

@Getter
public enum RoleEnum {
    ROLE_ADMIN("ROLE_ADMIN"),
    ROLE_CUSTOMER("ROLE_CUSTOMER");

    private final String description;

    RoleEnum(String description) {
        this.description = description;
    }

}
