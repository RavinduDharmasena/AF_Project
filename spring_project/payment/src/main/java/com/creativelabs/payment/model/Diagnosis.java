package com.creativelabs.payment.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="diagnosis")
public class Diagnosis {
	@Id
	private String diagnoseid;
	private String patientid;
	private String complaints;
	private String allergies;
	private String phyexams;
	private Treatment treatments;
	private List<DiagDrug> presdrugs;
	
	public String getDiagnoseid() {
		return diagnoseid;
	}
	public void setDiagnoseid(String diagnoseid) {
		this.diagnoseid = diagnoseid;
	}
	public String getPatientid() {
		return patientid;
	}
	public void setPatientid(String patientid) {
		this.patientid = patientid;
	}
	public String getComplaints() {
		return complaints;
	}
	public void setComplaints(String complaints) {
		this.complaints = complaints;
	}
	public String getAllergies() {
		return allergies;
	}
	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}
	public String getPhyexams() {
		return phyexams;
	}
	public void setPhyexams(String phyexams) {
		this.phyexams = phyexams;
	}
	public Treatment getTreatments() {
		return treatments;
	}
	public void setTreatments(Treatment treatments) {
		this.treatments = treatments;
	}
	public List<DiagDrug> getPresdrugs() {
		return presdrugs;
	}
	public void setPresdrugs(List<DiagDrug> presdrugs) {
		this.presdrugs = presdrugs;
	}
}
