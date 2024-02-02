package com.example.backend;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @PersistenceContext
    private EntityManager entityManager;
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    public Optional<Customer> getCustomerById(Long id) {
        // Use EntityManager to eagerly fetch associated entities
        Customer customer = entityManager.find(Customer.class, id);
        if (customer != null) {
            // Trigger lazy loading for mobileNumbers, familyMembers, and addresses
            customer.getMobileNumbers().size(); 
            customer.getFamilyMembers().size();  
            customer.getAddresses().size();      
        }
        return Optional.ofNullable(customer);
    }
    public Optional<Customer> getCustomerByNicNumber(String nicNumber) {
        return customerRepository.findByNicNumber(nicNumber);
    }
    public Customer createCustomer(Customer customer) {
        // Check if NIC number is unique
        if (isNicNumberUnique(customer.getNicNumber())) {
            // Set the customer for each family member
            if (customer.getFamilyMembers() != null) {
                for (FamilyMember familyMember : customer.getFamilyMembers()) {
                    familyMember.setCustomer(customer);
                }
            }

            // Set the customer for each address
            if (customer.getAddresses() != null) {
                for (Address address : customer.getAddresses()) {
                    address.setCustomer(customer);
                }
            }

            // Save the customer
            return customerRepository.save(customer);
        } else {
            throw new RuntimeException("NIC number already exists. Please use a unique NIC number.");
        }
    }

    private boolean isNicNumberUnique(String nicNumber) {
        // Check if the NIC number already exists in the database
        return !customerRepository.findByNicNumber(nicNumber).isPresent();
    }

    public Customer updateCustomerWithImage(Long id, Customer updatedCustomer, MultipartFile nicImage) throws IOException {
        // Retrieve the existing customer from the database
        Optional<Customer> existingCustomerOptional = customerRepository.findById(id);

        if (existingCustomerOptional.isPresent()) {
            Customer existingCustomer = existingCustomerOptional.get();

            // Update other fields as needed
            existingCustomer.setName(updatedCustomer.getName());
            existingCustomer.setDateOfBirth(updatedCustomer.getDateOfBirth());
            existingCustomer.setNicNumber(updatedCustomer.getNicNumber());
            existingCustomer.setMobileNumbers(updatedCustomer.getMobileNumbers());

            // Update family members
            if (updatedCustomer.getFamilyMembers() != null) {
                existingCustomer.getFamilyMembers().clear();
                existingCustomer.getFamilyMembers().addAll(updatedCustomer.getFamilyMembers());
                existingCustomer.getFamilyMembers().forEach(familyMember -> {
                    familyMember.setCustomer(existingCustomer);
                    
                });
            }

            // Update addresses
            if (updatedCustomer.getAddresses() != null) {
                existingCustomer.getAddresses().clear();
                existingCustomer.getAddresses().addAll(updatedCustomer.getAddresses());
                existingCustomer.getAddresses().forEach(address -> {
                    address.setCustomer(existingCustomer);
                    
                });
            }

            // Update the image only if a new image is provided
            if (nicImage != null && !nicImage.isEmpty()) {
                existingCustomer.setNicImage(nicImage.getBytes());
            }

            // Save the updated customer
            return customerRepository.save(existingCustomer);
        } else {
            // Handle the case where the customer with the given id is not found
            throw new EntityNotFoundException("Customer with id " + id + " not found");
        }
    }


    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    public List<Customer> createOrUpdateCustomersBulk(List<Customer> customers) {
        List<Customer> createdOrUpdatedCustomers = new ArrayList<>();

        for (Customer customer : customers) {
            Optional<Customer> existingCustomerOptional = customerRepository.findByNicNumber(customer.getNicNumber());

            if (existingCustomerOptional.isPresent()) {
                // Existing customer, update
                Customer existingCustomer = existingCustomerOptional.get();
                existingCustomer.setName(customer.getName());
                existingCustomer.setDateOfBirth(customer.getDateOfBirth());
                // Update other fields as needed
                existingCustomer.setMobileNumbers(customer.getMobileNumbers());  // Update mobile numbers

                // Update family members
                if (customer.getFamilyMembers() != null) {
                    existingCustomer.getFamilyMembers().clear();
                    existingCustomer.getFamilyMembers().addAll(customer.getFamilyMembers());
                    existingCustomer.getFamilyMembers().forEach(familyMember -> {
                        familyMember.setCustomer(existingCustomer);
                        
                    });
                }

                // Update addresses
                if (customer.getAddresses() != null) {
                    existingCustomer.getAddresses().clear();
                    existingCustomer.getAddresses().addAll(customer.getAddresses());
                    existingCustomer.getAddresses().forEach(address -> {
                        address.setCustomer(existingCustomer);
                       
                    });
                }

                try {
                    createdOrUpdatedCustomers.add(updateCustomerWithImage(existingCustomer.getId(), existingCustomer, null));
                } catch (IOException e) {
                    
                    e.printStackTrace(); // Change this to appropriate error handling
                }
            } else {
                // New customer, create
                createdOrUpdatedCustomers.add(createCustomer(customer));
            }
        }

        return createdOrUpdatedCustomers;
    }
}
