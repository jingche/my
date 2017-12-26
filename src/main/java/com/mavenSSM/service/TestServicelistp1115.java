package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaolistp1115;
import com.mavenSSM.model.Listp1115;

@Service
public class TestServicelistp1115 {
	@Autowired
	private TestDaolistp1115 td;
	
	public Listp1115 getListp1115(){
		return td.getListp1115();
	}
}
