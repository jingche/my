package com.mavenSSM.model;

import java.util.Date;

public class  Artifacts {
    private Integer id;

    private String Owner;

    private Date Started_date;

    private Date Finished_date;

    private Integer Used_days;

    private String Category;

    private String Description;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwner() {
        return Owner;
    }

    public void setOwner(String Owner) {
        this.Owner = Owner;
    }

    public Date getStarted_date() {
        return Started_date;
    }

    public void setStarted_date(Date Started_date) {
        this.Started_date = Started_date;
    }

    public  Date getFinished_date() {
        return Finished_date;
    }

    public void setFinished_date( Date Finished_date) {
        this.Finished_date = Finished_date;
    }

    public Integer getUsed_days() {
        return  Used_days;
    }

    public void setUsed_days(Integer  Used_days) {
        this. Used_days =  Used_days;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String Category) {
        this.Category= Category;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String Description) {
        this.Description = Description;
    }

     
}