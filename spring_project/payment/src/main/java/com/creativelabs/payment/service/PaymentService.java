package com.creativelabs.payment.service;

import com.creativelabs.payment.model.Bill;
import com.creativelabs.payment.model.Diagnosis;
import com.creativelabs.payment.model.Registration;

public interface PaymentService {
	Bill calcTotBill(String diagnosisid);
	Diagnosis getdiag();
	Diagnosis addDiagnosis(Diagnosis d);
	Registration getPatient(String id);
}
