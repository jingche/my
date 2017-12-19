package com.mavenSSM.model;

import java.util.Date;

public class Trlist  {
    private Integer id;

    private String Eriref;

    private String Registered_by;

    private Date Registered_date;

    private Date Finished_date;

    private String Turnaround_time;

    private String Answer_code;

    private String Valid;

    private String Heading;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEriref() {
        return Eriref;
    }

    public void setEriref(String Eriref) {
        this.Eriref = Eriref;
    }

    public String getRegistered_by() {
        return Registered_by;
    }

    public void setRegistered_by(String Registered_by) {
        this.Registered_by = Registered_by;
    }


    public Date getRegistered_date() {
        return Registered_date;
    }

    public void setRegistered_date(Date Registered_date) {
        this.Registered_date= Registered_date;
    }

    public Date getFinished_date() {
        return Finished_date;
    }

    public void setFinished_date(Date Finished_date) {
        this.Finished_date = Finished_date;
    }

    public String getTurnaround_time() {
        return Turnaround_time;
    }

    public void setTurnaround_time(String Turnaround_time) {
        this.Turnaround_time = Turnaround_time;
    }

    public String getAnswer_code() {
        return Answer_code;
    }

    public void setAnswer_code(String Answer_code) {
        this.Answer_code = Answer_code;
    }

    public String getValid() {
        return Valid;
    }

    public void setValid(String Valid) {
        this.Valid = Valid;
    }
    
    public String getHeading() {
    	return Heading;
    }
    public void setHeading(String Heading) {
    	this.Heading= Heading;
    }
    
}