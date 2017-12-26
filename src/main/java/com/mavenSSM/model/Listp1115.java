package com.mavenSSM.model;

import java.util.Date;

public class Listp1115 {
    private Integer id;
    
    private  Date   date;
 
    private Integer Passed;

    private Integer Failed_TR;

    private Integer  Failed_Environment;

    private Integer  Failed_Artifact;

    private Integer  Inconclusive;

    private String   Comment;

    private String   G1_LTE_UP;
    
    private String   G1_WCDMA_UP;
    
    private String   Effectiveness;
    
    private String   Stability;

     

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public Date getdate() {
    	return date;
    }
    
    public void setdate(Date date) {
    	this.date=date;
    }

    public Integer getPassed() {
        return Passed;
    }

    public void setPassed(Integer Passed) {
        this.Passed = Passed;
    }

    public Integer getFailed_TR() {
        return Failed_TR;
    }

    public void setFailed_TR(Integer Failed_TR) {
        this.Failed_TR = Failed_TR;
    }

    public Integer getFailed_Environment() {
        return Failed_Environment;
    }

    public void setFailed_Environment(Integer Failed_Environment) {
        this.Failed_Environment= Failed_Environment;
    }

    public Integer getFailed_Artifact() {
        return Failed_Artifact;
    }

    public void setFailed_Artifact(Integer Failed_Artifact) {
        this.Failed_Artifact= Failed_Artifact;
    }

    public Integer getInconclusive() {
        return Inconclusive;
    }

    public void setInconclusive(Integer Inconclusive) {
        this.Inconclusive = Inconclusive;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String Comment) {
        this.Comment= Comment;
    }

    public String getG1_LTE_UP() {
        return G1_LTE_UP;
    }

    public void setG1_LTE_UP(String G1_LTE_UP) {
        this.G1_LTE_UP =G1_LTE_UP;
    }
    
    public String getG1_WCDMA_UP() {
        return G1_WCDMA_UP;
    }

    public void setG1_WCDMA_UP(String G1_WCDMA_UP) {
        this.G1_WCDMA_UP =G1_WCDMA_UP;
    }
    

    public String getEffectiveness() {
        return Effectiveness;
    }

    public void setEffectiveness(String Effectiveness) {
        this.Effectiveness = Effectiveness;
    }
    
    public String getStability() {
    	return Stability;
    }
    
    public void setStability(String Stability) {
    	this.Stability=Stability;
    }
       
}