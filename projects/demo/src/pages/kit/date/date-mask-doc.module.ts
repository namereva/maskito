import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaskitoModule} from '@maskito/angular';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {DateMaskDocComponent} from './date-mask-doc.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaskitoModule,
        TuiAddonDocModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(tuiGenerateRoutes(DateMaskDocComponent)),
    ],
    declarations: [DateMaskDocComponent],
    exports: [DateMaskDocComponent],
})
export class DateMaskDocModule {}
