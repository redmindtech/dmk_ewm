import { Component } from '@angular/core';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
    selectedState: any = null;
    cities:any[] = [

    ];
    selectedDrop:any = { value: '' };
    districtadmin:boolean=false;
    valCheck: string[] = [];
    createdistrictadmin:boolean=false;
    selfregistration:boolean=false;
    display: boolean = false;
    home:boolean=false;
    dashboard:boolean=false;


    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
    valRadio: string = '';

    toggle(a:any){
        this.districtadmin = !this.districtadmin;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.home=false;
       }

    toggle1(a:any){
        this.createdistrictadmin= !this.createdistrictadmin;
        this.districtadmin=false;
        this.selfregistration=false;
        this.home=false;
        this.dashboard=false;
       

       }
    toggle2(a:any){
        this.selfregistration = !this.selfregistration;
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.home=false;
       }
    toggle3(a:any){
        this.home = !this.home;

    }
    toggledashboard(a:any){
        this.dashboard=!this.dashboard;
        this.home=false;
        this.createdistrictadmin=false;
        return this.dashboard=true;


 }
 toggle5(a:any){
    this.districtadmin = !this.districtadmin;
    this.createdistrictadmin=false;
    this.selfregistration=false;
    this.home=false;
    this.dashboard=false;
}
}
