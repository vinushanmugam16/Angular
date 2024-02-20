import { FormControl } from "@angular/forms";



export class CustomValidators{
   static noSpace(control:FormControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpace:true}
        }
        return null;
} 
}