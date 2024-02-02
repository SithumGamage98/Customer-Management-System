/*package com.example.backend;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExcelHelper {

    public static List<Customer> excelToCustomers(InputStream inputStream) {
        try (Workbook workbook = WorkbookFactory.create(inputStream)) {
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();

            List<Customer> customers = new ArrayList<>();

            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // Skip header row
                if (currentRow.getRowNum() == 0) {
                    continue;
                }

                Customer customer = new Customer();

                // Set customer attributes based on cell values in the row
                customer.setName(getStringCellValue(currentRow.getCell(0)));
                customer.setDateOfBirth(getLocalDateCellValue(currentRow.getCell(1)));
                customer.setNicNumber(getStringCellValue(currentRow.getCell(2)));

                // Mobile Numbers (Column 3 and onwards)
                List<String> mobileNumbers = new ArrayList<>();
                for (int cellIndex = 3; cellIndex <= 5; cellIndex++) {
                    String mobileNumber = getStringCellValue(currentRow.getCell(cellIndex));
                    if (mobileNumber != null && !mobileNumber.isEmpty()) {
                        mobileNumbers.add(mobileNumber);
                    }
                }
                customer.setMobileNumbers(mobileNumbers);

                // Family Members (Assuming 5 family members in columns 6 to 10)
                List<FamilyMember> familyMembers = new ArrayList<>();
                for (int cellIndex = 6; cellIndex <= 8; cellIndex++) {
                    String familyMemberName = getStringCellValue(currentRow.getCell(cellIndex));
                    if (familyMemberName != null && !familyMemberName.isEmpty()) {
                        FamilyMember familyMember = new FamilyMember();
                        familyMember.setName(familyMemberName);
                        familyMembers.add(familyMember);
                    }
                }
                customer.setFamilyMembers(familyMembers);

                // Addresses (Assuming 4 addresses in columns 11 to 14)
                List<Address> addresses = new ArrayList<>();
                for (int cellIndex = 9; cellIndex <= 12; cellIndex += 4) {
                    String addressLine1 = getStringCellValue(currentRow.getCell(cellIndex));
                    String addressLine2 = getStringCellValue(currentRow.getCell(cellIndex + 1));
                    String city = getStringCellValue(currentRow.getCell(cellIndex + 2));
                    String country = getStringCellValue(currentRow.getCell(cellIndex + 3));

                    if (addressLine1 != null || addressLine2 != null || city != null || country != null) {
                        Address address = new Address();
                        address.setAddressLine1(addressLine1);
                        address.setAddressLine2(addressLine2);
                        address.setCity(city);
                        address.setCountry(country);
                        addresses.add(address);
                    }
                }
                customer.setAddresses(addresses);

                customers.add(customer);
            }

            return customers;
        } catch (IOException | IllegalStateException ex) {
            throw new RuntimeException("Error reading Excel file: " + ex.getMessage());
        }
    }
*/