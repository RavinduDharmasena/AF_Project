package com.creativelabs.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.creativelabs.payment.model.Injection;

@Repository
public interface InjectionRepository extends MongoRepository<Injection,String>{
	Injection findOneByInjectid(String injectid);
}
