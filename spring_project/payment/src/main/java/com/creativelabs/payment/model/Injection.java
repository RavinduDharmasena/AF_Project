package com.creativelabs.payment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="injections")
public class Injection {
	@Id
	private String injectid;
	private String injectname;
	private int injectprice;
	
	public String getInjectid() {
		return injectid;
	}
	public void setInjectid(String injectid) {
		this.injectid = injectid;
	}
	public String getInjectname() {
		return injectname;
	}
	public void setInjectname(String injectname) {
		this.injectname = injectname;
	}
	public int getInjectprice() {
		return injectprice;
	}
	public void setInjectprice(int injectprice) {
		this.injectprice = injectprice;
	}
}
