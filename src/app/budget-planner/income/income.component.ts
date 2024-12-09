import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
incomeForm:any;
selectedMonth: any;

januaryIncome:any[] = [
  {source: 'salary', amount: 6500, investment: '405(k)'},
  {source: 'freelancing', amount: 2500, investment: 'Stocks'}
];

februaryIncome:any[] = [
  {source: 'salary', amount: 7500, investment: '305(k)'},
  {source: 'freelancing', amount: 4500, investment: 'Stocks'}
];

marchIncome:any[] = [
  {source: 'salary', amount: 7500, investment: '505(k)'},
  {source: 'freelancing', amount: 3500, investment: 'Stocks'},
  {source: 'Rental Income', amount: 400, investment: 'Real Estate'}
]

aprilIncome:any[] = [
  {source: 'salary', amount: 5500, investment: '205(k)'},
  {source: 'freelancing', amount: 2500, investment: 'Stocks'},
  {source: 'Rental Income', amount: 600, investment: 'Real Estate'}
]

monthSelected:boolean=false;

constructor(public fb:FormBuilder, public router:Router){
const currentDate = new Date();
this.selectedMonth = currentDate.toLocaleString('default', {month:'long'});
}

ngOnInit():void{
  this.incomeForm = this.fb.group({
    month: ['', Validators.required],
    source: ['', Validators.required],
    amount: ['', Validators.required],
    investment: ['', Validators.required]
  });
}



onChange(event:any){
this.selectedMonth=event.target.value;
this.monthSelected=true;
this.getFilteredIncomes();
}



calculateTotalIncome(month:string): number {
  let totalIncome =0;
  for (const income of this.getIncomeForMonth(month)){
    totalIncome += income.amount;
  }
  return totalIncome;
}

getIncomeForMonth(month:string): any[] {
switch(month){
  case 'January':
    return this.januaryIncome;

  case 'February':
    return this.februaryIncome;
  
  case 'March':
    return this.marchIncome;

  case 'April':
    return this.aprilIncome;
  
  default:
    return [];
}
}

getFilteredIncomes(){
let filteredIncomes: any[] = [];
switch (this.selectedMonth){
  case 'January':
    filteredIncomes = [...this.januaryIncome]
    break;
  case 'February':
    filteredIncomes = [...this.februaryIncome]
  break;
  case 'March':
    filteredIncomes = [...this.marchIncome]
break;
  case 'April':
    filteredIncomes = [...this.aprilIncome]
  break;
  default:
   break;
}
return filteredIncomes;
}

onSubmit(){
  if(this.incomeForm.valid){
    const newIncome = this.incomeForm.value;
    switch(this.selectedMonth){
      case 'January':
        this.januaryIncome.push(newIncome);
        break;
      case 'February':
        this.februaryIncome.push(newIncome);
      break;
      case 'March':
        this.marchIncome.push(newIncome);
    break;
      case 'April':
        this.aprilIncome.push(newIncome);
      break;
      default:
       break;
    }
    this.incomeForm.reset();
    this.incomeForm.patchValue({month:'', source: '', amount:'', investment:''})
  }
}

onBack(){
this.router.navigate(['/budget-planner/dashboard']);
}

saveForm(){
console.log("form saved");
}



}
