package com.manoj.employe_management.Model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;


@Entity
@Table(name="employer")
public class Employee {
    @Id
    @Column(name="employe_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeid;
    @Column(name="employe_name")
    private String name;
    @Column(name="employe_phonenumber")
    private Long phonenumber;
    @Column(name="employe_gender")
    private String gender;
    @Column(name="employe_country")
    private String country;
    @Column(name="employe_role")
    private String role;
    @Column(name="employe_department")
    private String department;

    @Column(name="employe_salary")
    private long salary;

    @Override
    public String toString() {
        return "Employee{" +
                "employeid=" + employeid +
                ", name='" + name + '\'' +
                ", phonenumber=" + phonenumber +
                ", gender='" + gender + '\'' +
                ", country='" + country + '\'' +
                ", role='" + role + '\'' +
                ", department='" + department + '\'' +
                ", salary=" + salary +
                '}';
    }



    public Employee() {
    }

    public Employee(int employeid, String name, Long phonenumber, String gender, String country,
                    String role, String department, long salary) {
        this.employeid = employeid;
        this.name = name;
        this.phonenumber = phonenumber;
        this.gender = gender;
        this.country = country;
        this.role = role;
        this.department = department;
        this.salary = salary;
    }

    public int getEmployeid() {
        return employeid;
    }

    public void setEmployeid(int employeid) {
        this.employeid = employeid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(Long phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public long getSalary() {
        return salary;
    }

    public void setSalary(long salary) {
        this.salary = salary;
    }
}
