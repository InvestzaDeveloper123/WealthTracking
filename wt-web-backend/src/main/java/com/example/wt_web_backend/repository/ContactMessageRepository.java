package com.example.wt_web_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.wt_web_backend.models.ContactMessage;

public interface ContactMessageRepository extends MongoRepository<ContactMessage, String> {
}
