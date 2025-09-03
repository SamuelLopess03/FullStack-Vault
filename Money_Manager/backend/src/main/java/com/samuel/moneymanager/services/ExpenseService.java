package com.samuel.moneymanager.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.samuel.moneymanager.dtos.ExpenseDTO;
import com.samuel.moneymanager.entities.CategoryEntity;
import com.samuel.moneymanager.entities.ExpenseEntity;
import com.samuel.moneymanager.entities.ProfileEntity;
import com.samuel.moneymanager.repositories.CategoryRepository;
import com.samuel.moneymanager.repositories.ExpenseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExpenseService {

	private final CategoryRepository categoryRepository;
	
	private final ExpenseRepository expenseRepository;
	
	private final ProfileService profileService;
	
	public ExpenseDTO addExpense(ExpenseDTO dto) {
		ProfileEntity profile = profileService.getCurrentProfile();
		
		CategoryEntity category = categoryRepository.findById(dto.getCategoryId())
				.orElseThrow(() -> new RuntimeException("Category not Found"));
		ExpenseEntity newExpense = toEntity(dto, profile, category);
		
		newExpense = expenseRepository.save(newExpense);
		
		return toDTO(newExpense);
	}
	
	public List<ExpenseDTO> getCurrentMonthExpensesForCurrentUser() {
		ProfileEntity profile = profileService.getCurrentProfile();
		
		LocalDate now = LocalDate.now();
		LocalDate startDate = now.withDayOfMonth(1);
		LocalDate endDate = now.withDayOfMonth(now.lengthOfMonth());
		
		List<ExpenseEntity> list = expenseRepository.findByProfileIdAndDateBetween(profile.getId(), startDate, endDate);
		
		return list.stream().map(this::toDTO).toList();
	}
	
	private ExpenseEntity toEntity(ExpenseDTO dto, ProfileEntity profile, CategoryEntity category) {
		return ExpenseEntity.builder()
							.name(dto.getName())
							.icon(dto.getIcon())
							.amount(dto.getAmount())
							.date(dto.getDate())
							.profile(profile)
							.category(category)
							.build();
	}
	
	private ExpenseDTO toDTO(ExpenseEntity expense) {
		return ExpenseDTO.builder()
							.id(expense.getId())
							.name(expense.getName())
							.icon(expense.getIcon())
							.categoryId(expense.getCategory() != null ? expense.getCategory().getId() : null)
							.categoryName(expense.getCategory() != null ? expense.getCategory().getName() : "N/A")
							.amount(expense.getAmount())
							.date(expense.getDate())
							.createdAt(expense.getCreatedAt())
							.updatedAt(expense.getUpdatedAt())
							.build();
	}
	
}
