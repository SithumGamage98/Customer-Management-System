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

               
        } catch (IOException | IllegalStateException ex) {
            throw new RuntimeException("Error reading Excel file: " + ex.getMessage());
        }
    }
*/