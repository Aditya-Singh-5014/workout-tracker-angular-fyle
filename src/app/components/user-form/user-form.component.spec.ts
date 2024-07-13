import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form.component';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: Router;

  beforeEach(async () => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['addUser']);

    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: DataService, useValue: dataServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addUser on submit', () => {
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      gender: 'Male',
      phoneNumber: '1234567890'
    });
    fixture.detectChanges(); // Ensure change detection is run

    component.onSubmit();

    expect(dataService.addUser).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      gender: 'Male',
      phoneNumber: '1234567890'
    });
  });

  it('should navigate to workout form on submit', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      gender: 'Male',
      phoneNumber: '1234567890'
    });
    fixture.detectChanges(); // Ensure change detection is run

    component.onSubmit();

    expect(navigateSpy).toHaveBeenCalledWith(['/workout-form']);
  });
});
