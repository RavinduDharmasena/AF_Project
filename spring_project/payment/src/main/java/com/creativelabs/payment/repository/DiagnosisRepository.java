package com.creativelabs.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.creativelabs.payment.model.Diagnosis;

@Repository
public interface DiagnosisRepository extends MongoRepository<Diagnosis,String>{
	Diagnosis findOneByDiagnoseid(String diagid);
	Diagnosis findOneByPatientid(String patientid);
}
