import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Overview',
            icon: 'pi pi-fw pi-bookmark-fill',
            routerLink: ['/dashboard/studio-overview'],
          },
        ],
      },
      {
        label: 'Student',
        items: [
          {
            label: 'Student Registration',
            icon: 'pi pi-fw pi-bookmark-fill',
            items: [
              {
                label: 'Student Register',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/student/studentRegistration'],
              },
              {
                label: 'Fee(s) Collection',
                icon: 'pi pi-fw pi-book',
                routerLink: ['/student/feesCollection'],
              },
              // {
              //   label: 'Student Course',
              //   icon: 'pi pi-fw pi-book',
              //   routerLink: ['/student/studentCourse'],
              // },
              // {
              //   label: 'Students Payment',
              //   icon: 'pi pi-fw pi-wallet',
              //   routerLink: ['/student/studentPayment'],
              // },
              // {
              //   label: 'Students Additional Info',
              //   icon: 'pi pi-fw pi-hourglass',
              //   routerLink: ['/student/studentAdditionalInfo'],
              // },
              {
                label: 'Students Details',
                icon: 'pi pi-fw pi-database',
                routerLink: ['/student/studentDetails'],
              },
            ],
          },
        ],
      },
      {
        label: 'Trainer',
        items: [
          {
            label: 'Trainer Registration',
            icon: 'pi pi-fw pi-bookmark-fill',
            items: [
              {
                label: 'Trainer Register',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/trainer/trainerRegistration'],
              },
              {
                label: 'Salary Calculations',
                icon: 'pi pi-fw pi-sitemap',
                routerLink: ['/trainer/salaryCalculation'],
              },
              {
                label: 'Trainer Details',
                icon: 'pi pi-fw pi-database',
                routerLink: ['/trainer/trainerDetails'],
              },
              // {
              //   label: 'Salary Calculation',
              //   icon: 'pi pi-fw pi-database',
              //   items: [
              //     {
              //       label: 'Total Amount Collected per Trainer',
              //       icon: 'pi pi-fw pi-pencil',
              //       routerLink: ['/trainer/salaryCalculation'],
              //     },
              //     {
              //       label: 'Studio Share (60%)',
              //       icon: 'pi pi-fw pi-pencil',
              //       routerLink: ['/trainer/salaryCalculation'],
              //     },
              //     {
              //       label: 'Total Amount Collected per Trainer',
              //       icon: 'pi pi-fw pi-pencil',
              //       routerLink: ['/trainer/salaryCalculation'],
              //     },
              //   ],
              // },
            ],
          },
        ],
      },

      {
        label: 'Event',
        items: [
          {
            label: 'Event Register',
            icon: 'pi pi-fw pi-bookmark-fill',
            items: [
              {
                label: 'Event Registration',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/event/eventRegistration'],
              },
              {
                label: 'Event Details',
                icon: 'pi pi-fw pi-database',
                routerLink: ['/event/eventDetails'],
              },
            ],
          },
        ],
      },
      {
        label: 'Fees Collection Section',
        items: [
          {
            label: 'Fees Collect',
            icon: 'pi pi-fw pi-bitcoin',
            routerLink: ['/student/feesManagement'],
          },
        ],
      },
      {
        label: 'Course Management Section',
        items: [
          {
            label: 'Course Manage',
            icon: 'pi pi-fw pi-cloud',
            routerLink: ['/student/courseManagement'],
          },
        ],
      },
      {
        label: 'Attendance Tracking',
        items: [
          {
            label: 'Attendance Tracker',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/student/attendanceManagement'],
          },
        ],
      },
      //{ label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/master/unitMaster'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
      // {
      //   label: 'Prime Blocks',
      //   items: [
      //     { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
      //     { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
      //   ]
      // },
      // {
      //   label: 'Utilities',
      //   items: [
      //     { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
      //     { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
      //   ]
      // },
      // {
      //   label: 'Pages',
      //   icon: 'pi pi-fw pi-briefcase',
      //   items: [
      //     {
      //       label: 'Landing',
      //       icon: 'pi pi-fw pi-globe',
      //       routerLink: ['/landing']
      //     },
      //     {
      //       label: 'Auth',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Login',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Error',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/auth/error']
      //         },
      //         {
      //           label: 'Access Denied',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/auth/access']
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Crud',
      //       icon: 'pi pi-fw pi-pencil',
      //       routerLink: ['/pages/crud']
      //     },
      //     {
      //       label: 'Timeline',
      //       icon: 'pi pi-fw pi-calendar',
      //       routerLink: ['/pages/timeline']
      //     },
      //     {
      //       label: 'Not Found',
      //       icon: 'pi pi-fw pi-exclamation-circle',
      //       routerLink: ['/notfound']
      //     },
      //     {
      //       label: 'Empty',
      //       icon: 'pi pi-fw pi-circle-off',
      //       routerLink: ['/pages/empty']
      //     },
      //   ]
      // },
      // {
      //   label: 'Hierarchy',
      //   items: [
      //     {
      //       label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
      //           ]
      //         },
      //         {
      //           label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
      //           ]
      //         },
      //       ]
      //     },
      //     {
      //       label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
      //           ]
      //         },
      //         {
      //           label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
      //           ]
      //         },
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Get Started',
      //   items: [
      //     {
      //       label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
      //     },
      //     {
      //       label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
      //     }
      //   ]
      // }
    ];
  }
}
