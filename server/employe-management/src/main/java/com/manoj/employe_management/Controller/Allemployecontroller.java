package com.manoj.employe_management.Controller;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.manoj.employe_management.Model.Employee;
import com.manoj.employe_management.Service.Employeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Allemployecontroller {
    @Autowired
    Employeservice service;

    @GetMapping("/")
    public List<Employee> getEmploye(){
        return service.getemploye();
    }

    @GetMapping("/employe")
    public List<Employee> getemploye(){
        return service.getemploye();
    }
    @PostMapping("/employe")
    public void addemploye(@RequestBody Employee er){
        service.addemploye(er);
    }

    @PutMapping("/updateemploye")
    public void uppdateemploye(@RequestBody Employee employe){
        service.updateemploye(employe);
    }
    @DeleteMapping("/deleteemploye/{id}")
    public void delete(@PathVariable int id){
        System.out.println(id);
        service.dodelete(id);
    }
}
