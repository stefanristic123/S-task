

import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }