package com.example.backend;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class AddressTest {

    @Test
    public void testAddressProperties() {
        // Create a sample customer
        Customer customer = new Customer();
        customer.setId(1L);

        // Create a sample address
        Address address = new Address();
        address.setId(1L);
        address.setAddressLine1("123 Main St");
        address.setAddressLine2("Apt 456");
        address.setCity("City");
        address.setCountry("Country");
        address.setCustomer(customer);

        // Assert properties
        assertEquals(1L, address.getId());
        assertEquals("123 Main St", address.getAddressLine1());
        assertEquals("Apt 456", address.getAddressLine2());
        assertEquals("City", address.getCity());
        assertEquals("Country", address.getCountry());

    }

    @Test
    public void testAddressCustomerAssociation() {
        // Create a sample customer
        Customer customer = new Customer();
        customer.setId(1L);

        // Create a sample address
        Address address = new Address();
        address.setId(1L);
        address.setCustomer(customer);


    }

    @Test
    public void testAddressCustomerAssociationWithoutCustomer() {
        // Create a sample address without setting the customer
        Address address = new Address();
        address.setId(1L);


    }
}
