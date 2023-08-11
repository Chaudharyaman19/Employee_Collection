package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.model.Employee;
import com.example.demo.repository.employee_repository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/",maxAge=3600)
public class mycontroller {
	@Autowired
	employee_repository employeeRepository;
	@GetMapping("/employee")
	public List<Employee> getemployee() {
		return employeeRepository.findAll();
	}
	@PostMapping("/employee")
	public Employee addemployee(@RequestBody Employee emp) {
		Employee getemp=employeeRepository.save(emp);
		return getemp;	
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<Optional<Employee>> getemployeeById(@PathVariable Long id){

	Optional<Employee> getemp=employeeRepository.findById(id);
	return ResponseEntity.ok().body(getemp);	
}
@PutMapping("/employee/{id}")
public ResponseEntity<Employee> updateemployeeById(@PathVariable Long id,@RequestBody Employee emp){
	Employee getemp=employeeRepository.getById(id);
	getemp.setFirstname(emp.getFirstname());
	getemp.setLastname(emp.getLastname());
	getemp.setEmail(emp.getEmail());
	Employee updateemp=employeeRepository.save(getemp);
	return ResponseEntity.ok().body(updateemp);			
}
@DeleteMapping("/employee/{id}")
public String deleteemployeeid (@PathVariable Long id){

Employee getemp=employeeRepository.getById(id);
employeeRepository.delete(getemp);
return "A record is deleted sucessfully";


}
		
}

