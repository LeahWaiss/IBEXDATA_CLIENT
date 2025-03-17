import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { MenuItem } from 'primeng/api';
import { ApartmentDetailsService } from '../../service/apartment-details.service';
import { ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { ApartmentDetails } from '../../Models/apartmentDetails.model';

@Component({
  standalone: true,
  selector: 'app-apartment',
  templateUrl: './apartmentDetails.component.html',
  styleUrls: ['./apartment.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule
  ]
})
export class ApartmentComponent {
  breadcrumbItems!: MenuItem[];
  carService: ApartmentDetailsService = inject(ApartmentDetailsService);
  ApartmentDetailes$!: ApartmentDetails[];
  filteredApartment!: ApartmentDetails[];

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
   console.log("kkkkkkkkkk");
   
    this.breadcrumbItems = [
      { label: 'דף הבית', url: '/' },
      { label: 'רשימת בנקים', url: '/bank' }
    ];
  }
  loadFare() {
    this.carService.GetApartmentsByBuilding().subscribe((apartmentDetailes) => {
      this.ApartmentDetailes$ = apartmentDetailes;
      this.filteredApartment = apartmentDetailes;
      console.log(apartmentDetailes);
    });
  }
}