import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { User } from '../models/user.model';
import { Workout } from '../models/workout.model';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', (done) => {
    const user: User = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      gender: 'Male',
      phoneNumber: '1234567890'
    };

    service.addUser(user);

    service.users$.subscribe(users => {
      expect(users).toContain(user);
      done();
    });
  });

  it('should add a workout', (done) => {
    const workout: Workout = {
      userName: 'John Doe',
      type: 'Running',
      duration: 30,
      date: new Date().toISOString() // Add the date property
    };

    service.addWorkout(workout);

    service.workouts$.subscribe(workouts => {
      expect(workouts).toContain(workout);
      done();
    });
  });
});
