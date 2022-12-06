import { Component ,OnInit,EventEmitter,Output} from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../ts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  gender=['male','female','not prefered to mention '];

constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    }
    
    usermodel=new User('prav','kota','pravallika@gmail.com',3456789011,'','jaeahar','hfdshg','df',789065, '');
    validate(pass: any,cpass: any){
      if(pass==cpass)
      return true;
      else return false;
    }
   
   onsubmit() {
      console.log(this.usermodel);
      


      
      }
}
  
  

  


