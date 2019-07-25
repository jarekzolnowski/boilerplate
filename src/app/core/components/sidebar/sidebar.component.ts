import { ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';


interface FoodNode{
  name: string;
  children?:FoodNode[];
}

const TREE_DATA:FoodNode[]=[
  {
    name: 'FormControls',
    children:[
      {name: 'Autocomplete'},
      {name: 'Checkbox'},
      {name: 'Datepicker'},
    ]
  }, {
    name: 'Navigation',
    children:[
      {
        name: 'Green',
        children:[
          {name: 'Broccoli'},
          {name: 'Brusselsprouts'},
        ]
      }, {
        name: 'Orange',
        children:[
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


interface ExampleFlatNode{
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.scss'],
})

export class SidebarComponent{
@ViewChild('sidenav') sidenav:MatSidenav;

  fillerNav=Array.from({length:50},(_,i)=>`NavItem${i+1}`);



private _transformer =(node:FoodNode, level: number)=>{
    return {
      expandable:!!node.children &&node.children.length > 0,
      name:node.name,
      level:level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node=>node.level, node=>node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node=>node.level, node=>node.expandable, node=>node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(){
    this.dataSource.data =TREE_DATA;
  }

  hasChild =(_: number, node:ExampleFlatNode)=>node.expandable;
}


              /**SIDEBAR TYPESCRIPT*/


export class SidenavResponsiveExample implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
