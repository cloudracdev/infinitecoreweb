package com.infinitecore.store.enums;

import lombok.Getter;

@Getter
public enum CategoryEnum {
    IPHONE("iPhone"),
    MAC("Mac"),
    IPAD("iPad"),
    ACCESSORY("Acessorio");

    private final String displayName;

    CategoryEnum(String displayName) {
        this.displayName = displayName;
    }

}