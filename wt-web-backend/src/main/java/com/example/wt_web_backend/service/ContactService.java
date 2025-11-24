package com.example.wt_web_backend.service;

import com.example.wt_web_backend.dtos.ContactMessageRequest;

public interface ContactService {

    void processForm(ContactMessageRequest dto);

}
