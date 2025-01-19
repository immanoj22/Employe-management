package com.manoj.employe_management.Repositary;

import com.manoj.employe_management.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface employerespositary extends JpaRepository<Employee, Integer> {
}
