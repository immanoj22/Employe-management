package com.manoj.employe_management.Service;

import com.manoj.employe_management.Model.Employee;
import com.manoj.employe_management.Repositary.employerespositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class Employeservice {
    @Autowired
    employerespositary employer;
    public List<Employee> getemploye() {
        return employer.findAll();
    }

    public void addemploye(Employee employee){
        employer.save(employee);
    }

    public void updateemploye(Employee employe) {
        employer.save(employe);
    }

    public void dodelete(int id) {
        employer.deleteById(id);

    }
}
