package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaoartifacts;
import com.mavenSSM.model.Artifacts;;

@Service
public class TestServiceartifacts {
	@Autowired
	private TestDaoartifacts td;
	
	public Artifacts getArtifacts(){
		return td.getArtifacts();
	}
}
