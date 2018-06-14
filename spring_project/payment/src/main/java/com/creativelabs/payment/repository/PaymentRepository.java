package com.creativelabs.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.creativelabs.payment.model.Payment;

@Repository
public interface PaymentRepository extends MongoRepository<Payment,String>{

}
