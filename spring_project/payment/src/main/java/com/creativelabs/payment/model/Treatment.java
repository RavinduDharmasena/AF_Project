package com.creativelabs.payment.model;

import java.util.List;

public class Treatment {
	private List<DiagInjection> injection;
	private boolean sewing;
	
	public List<DiagInjection> getInjection() {
		return injection;
	}
	public void setInjection(List<DiagInjection> injection) {
		this.injection = injection;
	}
	public boolean isSewing() {
		return sewing;
	}
	public void setSewing(boolean sewing) {
		this.sewing = sewing;
	}
}
