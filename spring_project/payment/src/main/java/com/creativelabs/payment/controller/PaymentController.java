package com.creativelabs.payment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.creativelabs.payment.model.Bill;
import com.creativelabs.payment.model.Diagnosis;
import com.creativelabs.payment.model.Registration;
import com.creativelabs.payment.service.PaymentService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/")
public class PaymentController {
	
	@Autowired
	private PaymentService payservice;
	
	@RequestMapping(value="/calcbill/{pid}",method=RequestMethod.GET)
	public Bill calculateBill(@PathVariable("pid") String pid) {
		return payservice.calcTotBill(pid);
	}
	
	@RequestMapping(value="/adddiag",method=RequestMethod.POST)
	public Diagnosis adddiag(@RequestBody Diagnosis d) {
		return payservice.addDiagnosis(d);
	}
	
	@RequestMapping(value="/getpaitent/{id}",method=RequestMethod.GET)
	public Registration getpatientbyid(@PathVariable String id) {
		return payservice.getPatient(id);
	}

}
