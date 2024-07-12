import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersSource = new BehaviorSubject<User[]>([
    { name: 'Aditya-Singh', email: 'Aditya@example.com', age: 25, gender: 'Male', phoneNumber: '1234567890' },
    { name: 'Adi', email: 'Adi@example.com', age: 30, gender: 'Female', phoneNumber: '0987654321' },
    { name: 'Yash', email: 'Yash@example.com', age: 28, gender: 'Other', phoneNumber: '1122334455' }
  ]);
  users$ = this.usersSource.asObservable();

  private workoutsSource = new BehaviorSubject<Workout[]>([
    { userName: 'Aditya', date: '2023-07-01', type: 'Running', duration: 30 },
    { userName: 'Adi', date: '2023-07-02', type: 'Cycling', duration: 45 },
    { userName: 'Yash', date: '2023-07-03', type: 'Swimming', duration: 60 }
  ]);
  workouts$ = this.workoutsSource.asObservable();

  addUser(user: User) {
    const currentUsers = this.usersSource.value;
    this.usersSource.next([...currentUsers, user]);
  }

  addWorkout(workout: Workout) {
    const currentWorkouts = this.workoutsSource.value;
    this.workoutsSource.next([...currentWorkouts, workout]);
  }
}
