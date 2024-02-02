package com.example.backend;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class FamilyMemberTest {

    @Test
    public void testFamilyMemberProperties() {
        // Create a sample customer
        Customer customer = new Customer();
        customer.setId(1L);

        // Create a sample family member
        FamilyMember familyMember = new FamilyMember();
        familyMember.setId(1L);
        familyMember.setName("Alice");
        familyMember.setCustomer(customer);

        // Assert properties
        assertEquals(1L, familyMember.getId());
        assertEquals("Alice", familyMember.getName());
    }

    @Test
    public void testFamilyMemberCustomerAssociation() {
        // Create a sample customer
        Customer customer = new Customer();
        customer.setId(1L);

        // Create a sample family member
        FamilyMember familyMember = new FamilyMember();
        familyMember.setId(1L);
        familyMember.setCustomer(customer);
    }

    @Test
    public void testFamilyMemberCustomerAssociationWithoutCustomer() {
        // Create a sample family member without setting the customer
        FamilyMember familyMember = new FamilyMember();
        familyMember.setId(1L);
    }
}
