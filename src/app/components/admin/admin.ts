import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})

// lifecycle events
// ngOnInit() {} hum use krte hain jab component load hota hai
// ngOnDestroy() {} hum use krte hain jab component destroy hota hai
// ngOnChanges() {} hum use krte hain jab component ke input properties change hoti
// ngDoCheck() {} hum use krte hain jab component ke state mein koi change hota hai
// ngAfterViewInit() {} hum use krte hain jab component ka view initialize hota hai
// ngAfterViewChecked() {} hum use krte hain jab component ka view check hota
// ngAfterContentInit() {} hum use krte hain jab component ka content initialize hota hai
// ngAfterContentChecked() {} hum use krte hain jab component ka content check hota hai


//isay hum class ke sth implement karte hain
// implements OnInit, OnDestroy, OnChanges, DoCheck
export class Admin implements OnInit, AfterViewInit ,OnDestroy{
  constructor() {
    console.log('Admin component constructor called');
    // properties ya services ko initialize karte hain
  }
  

  ngOnInit() {
    console.log('Admin component initialized');
    // yahan hum API calls ya data fetch karte hain
    // yahan hum component ke initial state set karte hain
    // yahan hum event listeners ya subscriptions set karte hain
    // yahan hum DOM manipulation karte hain
    
  }
  ngAfterViewInit() {
    console.log('Admin component view initialized');
    // yahan hum DOM manipulation karte hain
    // yahan hum child components ke views ko access karte hain
    // yahan hum third-party libraries ko initialize karte hain
  }

  ngOnDestroy() {
    console.log('Admin component destroyed');
    // yahan hum subscriptions ko unsubscribe karte hain
    // yahan hum event listeners ko remove karte hain
    // yahan hum resources ko release karte hain
  }

  
}
