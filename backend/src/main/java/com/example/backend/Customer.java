package com.example.backend;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Autogenerate value for Id
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDate dateOfBirth;
    @Column(unique = true, nullable = false) //Nic shoud unique
    private String nicNumber;
    @ElementCollection
    private List<String> mobileNumbers; // Multiple mobile numbers (optional)
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FamilyMember> familyMembers; // Multiple family members (optional)
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addresses; // Multiple addresses (optional)
    @Lob
    @Column(length = 1000000) // Adjust the length based want
    private byte[] nicImage;
    //getters and setters for fileds 
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public String getNicNumber() {
        return nicNumber;
    }
    public void setNicNumber(String nicNumber) {
        this.nicNumber = nicNumber;
    }
    public List<String> getMobileNumbers() {
        return mobileNumbers;
    }
    public void setMobileNumbers(List<String> mobileNumbers) {
        this.mobileNumbers = mobileNumbers;
    }
    public List<FamilyMember> getFamilyMembers() {
        return familyMembers;
    }
    public void setFamilyMembers(List<FamilyMember> familyMembers) {
        this.familyMembers = familyMembers;
    }
    public List<Address> getAddresses() {
        return addresses;
    }
    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }
    public byte[] getNicImage() {
        return nicImage;
    }

    public void setNicImage(byte[] nicImage) {
        this.nicImage = nicImage;
    }
}