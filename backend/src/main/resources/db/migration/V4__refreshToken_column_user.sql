BEGIN;

ALTER TABLE IF EXISTS auth.users
ADD COLUMN "refresh_token" text;

COMMIT;