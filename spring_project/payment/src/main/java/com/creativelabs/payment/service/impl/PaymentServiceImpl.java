package com.creativelabs.payment.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.creativelabs.payment.model.Bill;
import com.creativelabs.payment.model.DiagDrug;
import com.creativelabs.payment.model.DiagInjection;
import com.creativelabs.payment.model.Diagnosis;
import com.creativelabs.payment.model.Drug;
import com.creativelabs.payment.model.Drugbill;
import com.creativelabs.payment.model.Injection;
import com.creativelabs.payment.model.Injectionbill;
import com.creativelabs.payment.model.Registration;
import com.creativelabs.payment.model.Treatment;
import com.creativelabs.payment.repository.DiagnosisRepository;
import com.creativelabs.payment.repository.DrugRepository;
import com.creativelabs.payment.repository.InjectionRepository;
import com.creativelabs.payment.repository.PaymentRepository;
import com.creativelabs.payment.repository.RegistrationRepository;
import com.creativelabs.payment.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{

	@Autowired
	private DiagnosisRepository diagrepo;
	
	@Autowired
	private DrugRepository drugrepo;
	
	@Autowired
	private InjectionRepository injectrepo;
	
	@Autowired
	private PaymentRepository payrepo;
	
	@Autowired
	private RegistrationRepository regrepo;
	
	@Override
	public Bill calcTotBill(String patientid) {

		
		int totinjectionbill=0;
		int sewingbill=500;
		int treatmentbill=0;
		int totdrugbill=0;
		int totbill=0;
		int boardingbill=0;
		int phyexmbill=0;
		
		Diagnosis d = diagrepo.findOneByPatientid(patientid);
		Registration r = regrepo.findOneByPatientid(Integer.parseInt(patientid));
		if(d!=null && r.getStatus().equals("admit")) {
			System.out.println("***************patient found");
			Bill bill = new Bill();
			bill.setBillid(UUID.randomUUID().toString());
			System.out.println(d.getDiagnoseid());
			System.out.println(d.getPatientid());
			System.out.println(d.getComplaints());
			System.out.println(d.getAllergies());
			System.out.println(d.getPhyexams());
			
			System.out.println(r.getFname());
			System.out.println(r.getLname());
			System.out.println(r.getStatus());
			System.out.println(r.getAdmitted_date());
			
			List<Injectionbill> injbillList = new ArrayList<Injectionbill>();
			List<Drugbill> drugbillList = new ArrayList<Drugbill>();
			
			if(!d.getTreatments().getInjection().isEmpty()) {
				
				for(DiagInjection i : d.getTreatments().getInjection()) {
					System.out.println(i.getInjectid());
					System.out.println(i.getAmt());
					Injection injection = injectrepo.findOneByInjectid(i.getInjectid());
					System.out.println("this is found injection "+injection.getInjectid());
					totinjectionbill += injection.getInjectprice()*i.getAmt();
					
					Injectionbill injbill = new Injectionbill();
					injbill.setId(injection.getInjectid());
					injbill.setName(injection.getInjectname());
					injbill.setUnitprice(injection.getInjectprice());
					injbill.setQty(i.getAmt());
					injbill.setSubprice(injection.getInjectprice()*i.getAmt());
					injbillList.add(injbill);
				}
				bill.setInjectionbill(injbillList);
			}
			else {
				System.out.println("injection array is empty");
			}
				
			if(!d.getPresdrugs().isEmpty()) {
				
				for(DiagDrug dd : d.getPresdrugs()) {
					System.out.println(dd.getDrugid());
					System.out.println(dd.getQty());
					Drug drug = drugrepo.findOneByDrugid(dd.getDrugid());
					totdrugbill +=drug.getDrugprice()*dd.getQty();
					
					Drugbill drbill = new Drugbill();
					drbill.setId(drug.getDrugid());
					drbill.setName(drug.getDrugname());
					drbill.setUnitprice(drug.getDrugprice());
					drbill.setQty(dd.getQty());
					drbill.setSubprice(drug.getDrugprice()*dd.getQty());
					drugbillList.add(drbill);
				}
				bill.setDrugbill(drugbillList);
			}
			else {
				//drugbillList= {};
			}

			bill.setBoardingdays(3);
			bill.setBoardingbill(3*300);
			boardingbill=3*300;
			
			bill.setPhyexams(d.getPhyexams());
			
			if(!(d.getPhyexams().isEmpty() || d.getPhyexams()==null)){
				bill.setPhyexambill(500);
				phyexmbill=500;
			}
			
			if(d.getTreatments().isSewing()){
				sewingbill = 500;
				bill.setSewingbill(sewingbill);
			}
			else {
				sewingbill=0;
				bill.setSewingbill(sewingbill);
			}
			
			treatmentbill = totinjectionbill+sewingbill;
			totbill = treatmentbill+totdrugbill+boardingbill+phyexmbill;
			System.out.println("Injection bill : "+totinjectionbill);
			System.out.println("Drug bill : "+totdrugbill);
			System.out.println("Treatment bill : "+treatmentbill);
			System.out.println("Total bill : "+totbill);
			
			bill.setTotdrugbill(totdrugbill);
			bill.setTotbill(totbill);
			bill.setTotinjbill(totinjectionbill);
			bill.setTottreatmentbill(treatmentbill);
			return bill;
		}
		else {
			System.out.println("***************patient not found");
			return null;
		}
		
	}

	@Override
	public Diagnosis getdiag() {

		Diagnosis d1 = new Diagnosis();
		
		d1.setDiagnoseid("diag0001");
		d1.setPatientid("p00001");
		d1.setComplaints("headache");
		d1.setAllergies("no allergies");
		d1.setPhyexams("xrays");
		
		DiagInjection dinj1 = new DiagInjection();
		dinj1.setInjectid("inj00001");
		dinj1.setAmt(2);
		
		DiagInjection dinj2 = new DiagInjection();
		dinj2.setInjectid("inj00002");
		dinj2.setAmt(1);
		
		List<DiagInjection> injList = new ArrayList<DiagInjection>();
		injList.add(dinj1);
		injList.add(dinj2);
		
		Treatment tr = new Treatment();
		tr.setInjection(injList);
		tr.setSewing(true);
		
		d1.setTreatments(tr);
		
		DiagDrug ddrug1 = new DiagDrug();
		ddrug1.setDrugid("ddr0001");
		ddrug1.setQty(5);
		
		DiagDrug ddrug2 = new DiagDrug();
		ddrug2.setDrugid("ddr0002");
		ddrug2.setQty(2);
		
		List<DiagDrug> ddlist = new ArrayList<DiagDrug>();
		ddlist.add(ddrug1);
		ddlist.add(ddrug2);
		
		d1.setPresdrugs(ddlist);
		
		return d1;
	}

	@Override
	public Diagnosis addDiagnosis(Diagnosis d) {
		return diagrepo.insert(d);
	}

	@Override
	public Registration getPatient(String id) {
		return regrepo.findOneByPatientid(Integer.parseInt(id));
	}
	
}
