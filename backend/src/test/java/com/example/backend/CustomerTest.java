package com.example.backend;

import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CustomerTest {

    @Test
    public void testCustomerProperties() {
        // Create a sample customer
        Customer customer = new Customer();
        customer.setId(1L);
        customer.setName("John Doe");
        customer.setDateOfBirth(LocalDate.of(1990, 1, 1));
        customer.setNicNumber("NIC123");
        customer.setMobileNumbers(Arrays.asList("1234567890", "9876543210"));

        // Assert properties
        assertEquals(1L, customer.getId());
        assertEquals("John Doe", customer.getName());
        assertEquals(LocalDate.of(1990, 1, 1), customer.getDateOfBirth());
        assertEquals("NIC123", customer.getNicNumber());
        assertEquals(Arrays.asList("1234567890", "9876543210"), customer.getMobileNumbers());
    }
}
