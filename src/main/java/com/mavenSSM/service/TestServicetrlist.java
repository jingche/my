package com.mavenSSM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenSSM.dao.TestDaotrlist;
import com.mavenSSM.model.Trlist;

@Service
public class TestServicetrlist {
	@Autowired
	private TestDaotrlist td;//td是dao层接口TestDaotrlist的成员变量
	//dao层跟数据库model的联系
	public Trlist getTrlist(){
		return td.getTrlist();
	}
}
