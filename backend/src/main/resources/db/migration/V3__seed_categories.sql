INSERT INTO catalog.categories (id, name)
VALUES ('701eff14-eec8-4f9d-b830-d7b569d27670', 'IPHONE')
ON CONFLICT (name) DO NOTHING;