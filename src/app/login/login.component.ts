import { Component,OnInit,Input } from '@angular/core';
import { User } from '../ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}usermodel=new User('','','',9876543210,'','','','',9,'');
 
  onsubmit() {
    console.log(this.usermodel);}
  
}
