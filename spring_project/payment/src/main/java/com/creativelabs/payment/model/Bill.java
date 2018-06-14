package com.creativelabs.payment.model;

import java.util.List;

public class Bill {
	private String billid;
	private int boardingdays;
	private int boardingbill;
	private String phyexams;
	private int phyexambill;
	private int sewingbill;
	private List<Drugbill> drugbill;
	private List<Injectionbill> injectionbill;
	private int tottreatmentbill;
	private int totdrugbill;
	private int totinjbill;
	private int totbill;
	
	public String getBillid() {
		return billid;
	}
	public void setBillid(String billid) {
		this.billid = billid;
	}
	public int getBoardingdays() {
		return boardingdays;
	}
	public void setBoardingdays(int boardingdays) {
		this.boardingdays = boardingdays;
	}
	public int getBoardingbill() {
		return boardingbill;
	}
	public void setBoardingbill(int boardingbill) {
		this.boardingbill = boardingbill;
	}
	public String getPhyexams() {
		return phyexams;
	}
	public void setPhyexams(String phyexams) {
		this.phyexams = phyexams;
	}
	public int getPhyexambill() {
		return phyexambill;
	}
	public void setPhyexambill(int phyexambill) {
		this.phyexambill = phyexambill;
	}
	public List<Drugbill> getDrugbill() {
		return drugbill;
	}
	public void setDrugbill(List<Drugbill> drugbill) {
		this.drugbill = drugbill;
	}
	public List<Injectionbill> getInjectionbill() {
		return injectionbill;
	}
	public void setInjectionbill(List<Injectionbill> injectionbill) {
		this.injectionbill = injectionbill;
	}
	public int getTottreatmentbill() {
		return tottreatmentbill;
	}
	public void setTottreatmentbill(int tottreatmentbill) {
		this.tottreatmentbill = tottreatmentbill;
	}
	public int getSewingbill() {
		return sewingbill;
	}
	public void setSewingbill(int sewingbill) {
		this.sewingbill = sewingbill;
	}
	public int getTotdrugbill() {
		return totdrugbill;
	}
	public void setTotdrugbill(int totdrugbill) {
		this.totdrugbill = totdrugbill;
	}
	public int getTotinjbill() {
		return totinjbill;
	}
	public void setTotinjbill(int totinjbill) {
		this.totinjbill = totinjbill;
	}
	public int getTotbill() {
		return totbill;
	}
	public void setTotbill(int totbill) {
		this.totbill = totbill;
	}
	
	
}
