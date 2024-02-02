package com.example.backend;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/{id}")
    public Optional<Customer> getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }

    @GetMapping("/nic/{nicNumber}")
    public ResponseEntity<Customer> getCustomerByNicNumber(@PathVariable String nicNumber) {
        Optional<Customer> customerOptional = customerService.getCustomerByNicNumber(nicNumber);

        return customerOptional
                .map(customer -> new ResponseEntity<>(customer, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<?> createCustomer(
            @RequestParam("nicImage") MultipartFile nicImage,
            @RequestParam("customer") String customerJson) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            objectMapper.registerModule(new JavaTimeModule());
            objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);

            Customer customer = objectMapper.readValue(customerJson, Customer.class);
            customer.setNicImage(nicImage.getBytes());

            Customer createdCustomer = customerService.createCustomer(customer);
            return ResponseEntity.ok().body(createdCustomer);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Error during customer creation: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCustomerWithImage(
            @PathVariable Long id,
            @RequestPart("nicImage") MultipartFile nicImage,
            @RequestPart("customer") String customerJson) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JavaTimeModule());

            Customer updatedCustomer = objectMapper.readValue(customerJson, Customer.class);

            Customer result = customerService.updateCustomerWithImage(id, updatedCustomer, nicImage);
            return ResponseEntity.ok().body(result);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error during customer update: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }
}
