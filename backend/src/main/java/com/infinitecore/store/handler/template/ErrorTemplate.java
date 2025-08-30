package com.infinitecore.store.handler.template;

import java.time.Instant;
import java.util.List;

public record ErrorTemplate(
        int status,
        String error,
        Instant timestamp,
        String path,
        List<String> errors
) {
}
