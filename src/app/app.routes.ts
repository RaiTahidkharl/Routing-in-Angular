import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentUSComponent } from './content-us/content-us.component';

export const routes: Routes = [
    {path:'home',component:DashboradComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'content-us',component:ContentUSComponent}
];
