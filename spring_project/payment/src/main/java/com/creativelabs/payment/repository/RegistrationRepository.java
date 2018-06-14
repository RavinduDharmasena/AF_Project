package com.creativelabs.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.creativelabs.payment.model.Registration;

public interface RegistrationRepository extends MongoRepository<Registration,String>{
	Registration findOneByPatientid(int id);
}
