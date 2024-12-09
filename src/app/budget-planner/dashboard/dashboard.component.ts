import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
//Income
  lastMonthsIncome = ['january: $1000', 'February: $3000', 'March: $4000'];
  currentMonthIncome = '$2000';

//Expense
lastMonthsExpense = ['january: $500', 'February: $1000', 'March: $1500'];
currentMonthExpense = '$800';

//Todo transaction
todoTransaction =[
  { description: 'Pay Electricity bill'},
  { description: 'Submit Monthly Report'},
  { description: 'Buy Groceries'},
  { description: 'Call Insurance Company'}
]

// total
totalCurrentMonthIncome = 2000;
totalCurrentMonthExpense = 800;


  constructor(public router: Router){}

  onIncome(){
    this.router.navigate(['/budget-planner/income']);
  }
  onExpense(){
    this.router.navigate(['/budget-planner/expense']);
  }

  onTodo(){
    this.router.navigate(['/budget-planner/income']);
  }

  get currentMonthSavings(): any {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
