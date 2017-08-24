import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class CheckFormService {

    checkDate(date: string): boolean {
        let day   = Number(date.slice(8,10));
        let month = Number(date.slice(5,7));
        let year  = Number(date.slice(0,4));
        let today = new Date();
        let thisYear = Number(today.getFullYear);

        // empty date
        if ( !date ) return false; 
        // date is too short
        if ( date.length !== 10 ) return false; 
        // invalid separators
        if ( date.slice(4,5) !== '-' && date.slice(7,8) !== '-' ) return false;
        // year, month or day is not a number 
        if ( isNaN(year) || isNaN(month) || isNaN(day) ) return false;
        // invalid month number 
        if ( month < 1 || month > 12 ) return false;
        // invalid day number 
        if ( day < 1 || day > 31 ) return false; 
        // invalid day number
        if ( (month == 2 && day > 29) ||
             (month > 7 && month%2 == 1 && day > 30) ||
             (month < 7 && month%2 == 0 && day > 30) ) return false;
        // year smaller than this year 
        if ( year < thisYear ) return false; 

        return true;
    }

    checkText(text: string): boolean {
        // empty text
        if ( !text ) return false;
        // text is too short
        if ( text.length < 3 ) return false;
        // text contains invalid characters
        if ( !/^[a-zA-Z ]+$/.test(text) ) return false;

        return true;
    }

    checkLoginPassword(form: FormGroup, field: string): boolean {
        if (form.get(field).value.length < 6) return false;
        
        return true;
    }

    checkEmail(form: FormGroup, field: string): boolean {
        // empty email
        if ( !field ) return false;

        // email is too short min 6
        if (form.get(field).value.length < 6) return false;

        // invalid format
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!re.test(form.get(field).value)) return false;

        return true;
    }

    checkPassword(form: FormGroup, field1: string, field2: string): boolean {
        // empty password
        if ( !field1 || !field2 ) return false;

        // password is too short min 6
        if (form.get(field1).value.length < 6 || form.get(field2).value.length < 6) return false;

        // compare password
        if (form.get(field1).value !== form.get(field2).value) return false;

        return true;
    }

    checkPhone(form: FormGroup, field: string): boolean {
        // empty phone
        if ( !field ) return false;

        let phoneNumber = form.get(field).value.replace(/[^\d]/g, '');
        let otherCharacters = form.get(field).value.replace(/[0-9]/g, '');

        if (phoneNumber.length !== 9 || (otherCharacters != "--" && otherCharacters != "" && otherCharacters != "  ")) return false;

        return true;
    }
}