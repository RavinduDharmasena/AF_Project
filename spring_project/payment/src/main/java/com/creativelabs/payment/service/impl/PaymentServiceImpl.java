package com.creativelabs.payment.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.joda.time.DateTime;
import org.joda.time.Days;
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
			
			List<Injectionbill> injbillList = new ArrayList<Injectionbill>();
			List<Drugbill> drugbillList = new ArrayList<Drugbill>();
			
			if(!d.getTreatments().getInjection().isEmpty()) {
				
				for(DiagInjection i : d.getTreatments().getInjection()) {
					Injection injection = injectrepo.findOneByInjectid(i.getInjectid());
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
				
			if(!d.getPresdrugs().isEmpty()) {
				
				for(DiagDrug dd : d.getPresdrugs()) {
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

			
			
			Date admdate = r.getAdmitted_date();
			Date today = new Date();

			try {

				DateTime dt1 = new DateTime(admdate);
				DateTime dt2 = new DateTime(today);
				int ndates = Days.daysBetween(dt1, dt2).getDays()+1;
				bill.setBoardingdays(ndates);
				bill.setBoardingbill(ndates*300);
				boardingbill=ndates*300;

			 } catch (Exception e) {
				e.printStackTrace();
			 }
			
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
	public Diagnosis addDiagnosis(Diagnosis d) {
		return diagrepo.insert(d);
	}

	@Override
	public Registration getPatient(String id) {
		return regrepo.findOneByPatientid(Integer.parseInt(id));
	}
	
}
