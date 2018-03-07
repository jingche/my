package com.mavenSSM.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mavenSSM.model.Listp;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class PerChange {
	public static void change(List<? extends Listp> list){
		for(Listp l: list){
			l.setEffectiveness(changePer(l.getEffectiveness()));
			l.setStability(changePer(l.getStability()));
		}
	}
	
	private static String changePer(String num){
		if(num.endsWith("%"))
			return num;
		StringBuilder sb = new StringBuilder();
		Matcher m = Pattern.compile("^\\d+\\.(\\d{1,2})(\\d*)$").matcher(num);
		if(m.find()){
			String pre = m.group(1);
			if(pre.length() == 1)
				pre+="0";
			sb.append(pre);
			
			final String dot = m.group(2);
			if(dot != null && dot.length() > 0)
				sb.append(".").append(dot);
			sb.append("%");
		}
		System.out.println(sb.toString());
		return sb.toString();
	}
}
