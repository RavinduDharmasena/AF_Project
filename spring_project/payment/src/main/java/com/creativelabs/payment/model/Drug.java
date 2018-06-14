package com.creativelabs.payment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="drugs")
public class Drug {
	@Id
	private String drugid;
	private String drugname;
	private int drugprice;
	
	public String getDrugid() {
		return drugid;
	}
	public void setDrugid(String drugid) {
		this.drugid = drugid;
	}
	public String getDrugname() {
		return drugname;
	}
	public void setDrugname(String drugname) {
		this.drugname = drugname;
	}
	public int getDrugprice() {
		return drugprice;
	}
	public void setDrugprice(int drugprice) {
		this.drugprice = drugprice;
	}
}
