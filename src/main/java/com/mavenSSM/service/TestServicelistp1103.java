package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaolistp1103;
import com.mavenSSM.model.Listp1103;

@Service
public class TestServicelistp1103 {
	@Autowired
	private TestDaolistp1103 td;
	
	public Listp1103 getListp1103(){
		return td.getListp1103();
	}
}
