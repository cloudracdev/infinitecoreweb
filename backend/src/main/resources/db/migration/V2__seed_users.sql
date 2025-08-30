-- password: 123456 (bcrypt)
INSERT INTO auth.users (id, username, password, role)
VALUES
    ('fd688dc5-d562-4d30-a5f1-9b8ba4c9d513', 'dev', '$2a$10$HfPZuHs6LFZRU87N.tNo4elEE4qcY.MTvuMJ3nFvWNHotbuCJ7xqe', 'ROLE_ADMIN')
ON CONFLICT (username) DO NOTHING;
