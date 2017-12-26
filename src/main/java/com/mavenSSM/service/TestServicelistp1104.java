package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaolistp1104;
import com.mavenSSM.model.Listp1104;

@Service
public class TestServicelistp1104 {
	@Autowired
	private TestDaolistp1104 td;
	
	public Listp1104 getListp1104(){
		return td.getListp1104();
	}
}
