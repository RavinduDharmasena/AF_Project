package com.creativelabs.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.creativelabs.payment.model.Drug;

@Repository
public interface DrugRepository extends MongoRepository<Drug,String> {
	Drug findOneByDrugid(String drugid);
}
