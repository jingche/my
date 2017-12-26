package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaolistp1114;
import com.mavenSSM.model.Listp1114;

@Service
public class TestServicelistp1114 {
	@Autowired
	private TestDaolistp1114 td;
	
	public Listp1114 getListp1114(){
		return td.getListp1114();
	}
}
