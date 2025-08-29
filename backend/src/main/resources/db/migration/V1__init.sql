BEGIN;

DROP SCHEMA IF EXISTS "catalog" CASCADE;
DROP SCHEMA IF EXISTS "sales" CASCADE;

create SCHEMA "catalog";
create SCHEMA "sales";

create TABLE "catalog"."categories"
(
    "id"   UUID PRIMARY KEY,
    "name" varchar(80) NOT NULL
);

create TABLE "catalog"."products"
(
    "id"          UUID PRIMARY KEY,
    "category_id" UUID        NOT NULL,
    "name"        varchar(50) NOT NULL,
    "model_year"  smallint,
    "created_at"  timestamp DEFAULT (now()),
    "updated_at"  timestamp DEFAULT (now())
);

create TABLE "catalog"."variants"
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

create TABLE "sales"."skus"
(
    "id"         UUID PRIMARY KEY,
    "variant_id" UUID UNIQUE        NOT NULL,
    "sku_code"   varchar(60) UNIQUE NOT NULL,
    "status"     varchar(15)        NOT NULL DEFAULT 'ACTIVE'
);

create TABLE "sales"."images"
(
    "id"     UUID PRIMARY KEY,
    "sku_id" UUID NOT NULL,
    "url"    text NOT NULL
);

create TABLE "sales"."sku_price"
(
    "id"     UUID PRIMARY KEY,
    "sku_id" UUID          NOT NULL,
    "amount" decimal(8, 2) NOT NULL
);

create TABLE "sales"."inventory"
(
    "sku_id"        UUID PRIMARY KEY,
    "qty_available" int NOT NULL DEFAULT 0 CHECK (qty_available >= 0),
    "qty_reserved"  int NOT NULL DEFAULT 0 CHECK (qty_reserved >= 0)
);

alter table "catalog"."products"
    add FOREIGN KEY ("category_id") REFERENCES "catalog"."categories" ("id");

alter table "catalog"."variants"
    add FOREIGN KEY ("product_id") REFERENCES "catalog"."products" ("id") ON delete CASCADE;

alter table "sales"."skus"
    add FOREIGN KEY ("variant_id") REFERENCES "catalog"."variants" ("id") ON delete CASCADE;

alter table "sales"."images"
    add FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON delete CASCADE;

alter table "sales"."sku_price"
    add FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON delete CASCADE;

alter table "sales"."inventory"
    add FOREIGN KEY ("sku_id") REFERENCES "sales"."skus" ("id") ON delete CASCADE;

COMMIT;