import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { Router } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit {
  chart!: Chart;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.workouts$.subscribe(workouts => {
      const workoutData = workouts.map(workout => workout.duration);
      const workoutLabels = workouts.map(workout => workout.type);

      const backgroundColors = workoutLabels.map(() => this.getRandomColor());

      const config: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels: workoutLabels,
          datasets: [{
            label: 'Minutes',
            data: workoutData,
            backgroundColor: backgroundColors,
            borderColor: '#3cba9f'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true
            },
            y: {
              display: true
            }
          }
        }
      };

      this.chart = new Chart('canvas', config);
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  goToUserForm() {
    this.router.navigate(['/user-form']);
  }
}
