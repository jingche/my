package com.mavenSSM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.ArtifactsDao;
import com.mavenSSM.model.Artifacts;
 

@Service
public class ArtifactsService {
	@Autowired
	private ArtifactsDao listDao;
	
	public List<Artifacts> getAllArtifacts(){
		return listDao.getAllARtifacts();
	}
	
	public int addNewItem(Artifacts artifacts){
		final String finishTime = artifacts.getFinished_date();
		if(finishTime == "")
			artifacts.setFinished_date(null);
		listDao.addNewItem(artifacts);
		return artifacts.getId();
	}
	
	public int editItem(Artifacts artifacts){
		final String finishTime = artifacts.getFinished_date();
		if(finishTime == "" || finishTime.matches("\\s+"))
			artifacts.setFinished_date(null);
		return listDao.editItem(artifacts);
	}
}
