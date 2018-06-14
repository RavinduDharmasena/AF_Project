package com.creativelabs.payment.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="registrations")
public class Registration {
	@Id
	private int patientid;
	private String fname;
	private String lname;
	private int age;
	private String gender;
	private String custodian_name;
	private int custodian_contact;
	private String nic;
	private int ward;
	private String status;
	private Date admitted_date;
	private Date discharged_date;
	private String priority_level;
	private String registered;
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCustodian_name() {
		return custodian_name;
	}
	public void setCustodian_name(String custodian_name) {
		this.custodian_name = custodian_name;
	}
	public int getCustodian_contact() {
		return custodian_contact;
	}
	public void setCustodian_contact(int custodian_contact) {
		this.custodian_contact = custodian_contact;
	}
	public String getNic() {
		return nic;
	}
	public void setNic(String nic) {
		this.nic = nic;
	}
	public int getWard() {
		return ward;
	}
	public void setWard(int ward) {
		this.ward = ward;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getAdmitted_date() {
		return admitted_date;
	}
	public void setAdmitted_date(Date admitted_date) {
		this.admitted_date = admitted_date;
	}
	public Date getDischarged_date() {
		return discharged_date;
	}
	public void setDischarged_date(Date discharged_date) {
		this.discharged_date = discharged_date;
	}
	public String getPriority_level() {
		return priority_level;
	}
	public void setPriority_level(String priority_level) {
		this.priority_level = priority_level;
	}
	public String getRegistered() {
		return registered;
	}
	public void setRegistered(String registered) {
		this.registered = registered;
	}
	
}
