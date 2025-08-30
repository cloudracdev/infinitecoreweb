BEGIN;

DROP SCHEMA IF EXISTS "auth" CASCADE;
DROP SCHEMA IF EXISTS "catalog" CASCADE;
DROP SCHEMA IF EXISTS "sales" CASCADE;

CREATE SCHEMA "auth";
CREATE SCHEMA "catalog";
CREATE SCHEMA "sales";

CREATE TYPE "status_enum" AS ENUM (
    'ACTIVE',
    'INACTIVE',
    'OUT_OF_STOCK'
    );

CREATE TABLE "auth"."users"
(
    "id"            UUID PRIMARY KEY,
    "username"      varchar(30) UNIQUE NOT NULL,
    "password"      varchar(100)       NOT NULL,
    "role"          varchar(20)        NOT NULL DEFAULT 'ROLE_CUSTOMER',
    "is_active"     boolean            NOT NULL DEFAULT true,
    "refresh_token" text,
    "created_at"    timestamp          NOT NULL DEFAULT (now()),
    "updated_at"    timestamp          NOT NULL DEFAULT (now())
);

CREATE TABLE "catalog"."categories"
(
    "id"   UUID PRIMARY KEY,
    "name" varchar(80) NOT NULL
);

CREATE TABLE "catalog"."products"
(
    "id"          UUID PRIMARY KEY,
    "category_id" UUID        NOT NULL,
    "user_id"     UUID        NOT NULL,
    "name"        varchar(50) NOT NULL,
    "model_year"  smallint,
    "created_at"  timestamp   NOT NULL DEFAULT (now()),
    "updated_at"  timestamp   NOT NULL DEFAULT (now())
);

CREATE TABLE "catalog"."variants"
(
    "id"           UUID PRIMARY KEY,
    "product_id"   UUID NOT NULL,
    "color"        varchar(20),
    "chip"         varchar(20),
    "ram_gb"       smallint,
    "storage_gb"   int,
    "screen_size"  numeric(4, 2),
    "case_size_mm" numeric(4, 1)
);

CREATE TABLE "sales"."skus"
(
    "id"         UUID PRIMARY KEY,
    "variant_id" UUID UNIQUE        NOT NULL,
    "sku_code"   varchar(60) UNIQUE NOT NULL,
    "status"     status_enum        NOT NULL DEFAULT 'ACTIVE'
);

CREATE TABLE "sales"."images"
(
    "id"     UUID PRIMARY KEY,
    "sku_id" UUID NOT NULL,
    "url"    text NOT NULL
);

CREATE TABLE "sales"."sku_price"
(
    "id"     UUID PRIMARY KEY,
    "sku_id" UUID UNIQUE   NOT NULL,
    "amount" decimal(8, 2) NOT NULL
);

CREATE TABLE "sales"."inventory"
(
    "sku_id"        UUID PRIMARY KEY,
    "qty_available" int NOT NULL DEFAULT 0 CHECK (qty_available >= 0),
    "qty_reserved"  int NOT NULL DEFAULT 0 CHECK (qty_reserved >= 0)
);

ALTER TABLE "catalog"."products"
    ADD FOREIGN KEY ("user_id") REFERENCES "auth"."users" ("id");

ALTER TABLE "catalog"."products"
    ADD FOREIGN KEY ("category_id") REFERENCES "catalog"."categories" ("id");

ALTER TABLE "catalog"."variants"
    ADD FOREIGN KEY ("product_id") REFERENCES "catalog"."products" ("id") ON DELETE CASCADE;

ALTER TABLE "sales"."skus"
    ADD FOREIGN KEY ("variant_id") REFERENCES "catalog"."variants" ("id") ON DELETE CASCADE;

ALTER TABLE "sales"."images"
    ADD FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON DELETE CASCADE;

ALTER TABLE "sales"."sku_price"
    ADD FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON DELETE CASCADE;

ALTER TABLE "sales"."inventory"
    ADD FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON DELETE CASCADE;

COMMIT;
