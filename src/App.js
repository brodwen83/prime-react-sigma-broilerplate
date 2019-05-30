import React, { Component } from 'react';
import classNames from 'classnames';
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
import AppInlineProfile from './AppInlineProfile';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/showcase/Dashboard';
import { FormsDemo } from './components/showcase/FormsDemo';
import { SampleDemo } from './components/showcase/SampleDemo';
import { DataDemo } from './components/showcase/DataDemo';
import { PanelsDemo } from './components/showcase/PanelsDemo';
import { OverlaysDemo } from './components/showcase/OverlaysDemo';
import { MenusDemo } from './components/showcase/MenusDemo';
import { MessagesDemo } from './components/showcase/MessagesDemo';
import { ChartsDemo } from './components/showcase/ChartsDemo';
import { MiscDemo } from './components/showcase/MiscDemo';
import { EmptyPage } from './components/showcase/EmptyPage';
import { Documentation } from './components/showcase/Documentation';
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';

type State = {
  layoutMode: string,
  layoutColorMode: string,
  staticMenuInactive: boolean,
  overlayMenuActive: boolean,
  mobileMenuActive: boolean,
};

class App extends Component<*, State> {
  constructor() {
    super();
    this.state = {
      layoutMode: 'static',
      layoutColorMode: 'dark',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick: () => void;
  onToggleMenu: () => void;
  onSidebarClick: () => void;
  onMenuItemClick: () => void;
  menuClick: any;
  layoutMenuScroller: any;
  menu: any;
  sidebar: any;

  onWrapperClick() {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event: Object) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === 'overlay') {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive,
        });
      } else if (this.state.layoutMode === 'static') {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive,
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive,
      });
    }

    event.preventDefault();
  }

  onSidebarClick() {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event: Object) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        command: () => {
          window.location = '#/';
        },
      },
      {
        label: 'Menu Modes',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Static Menu',
            icon: 'pi pi-fw pi-bars',
            command: () => this.setState({ layoutMode: 'static' }),
          },
          {
            label: 'Overlay Menu',
            icon: 'pi pi-fw pi-bars',
            command: () => this.setState({ layoutMode: 'overlay' }),
          },
        ],
      },
      {
        label: 'Menu Colors',
        icon: 'pi pi-fw pi-align-left',
        items: [
          {
            label: 'Dark',
            icon: 'pi pi-fw pi-bars',
            command: () => this.setState({ layoutColorMode: 'dark' }),
          },
          {
            label: 'Light',
            icon: 'pi pi-fw pi-bars',
            command: () => this.setState({ layoutColorMode: 'light' }),
          },
        ],
      },
      {
        label: 'Components',
        icon: 'pi pi-fw pi-globe',
        badge: '9',
        items: [
          { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample' },
          { label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms' },
          { label: 'Data', icon: 'pi pi-fw pi-table', to: '/data' },
          { label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels' },
          { label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays' },
          { label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus' },
          { label: 'Messages', icon: 'pi pi-fw pi-spinner', to: '/messages' },
          { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts' },
          { label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc' },
        ],
      },
      {
        label: 'Template Pages',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
        ],
      },
      {
        label: 'Menu Hierarchy',
        icon: 'pi pi-fw pi-search',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
            ],
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-question',
        command: () => {
          window.location = '#/documentation';
        },
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-search',
        command: () => {
          window.location = 'https://github.com/primefaces/sigma';
        },
      },
    ];
  }

  addClass(element: Element, className: any) {
    if (element.classList) element.classList.add(className);
    else element.className += ' ' + className;
  }

  removeClass(element: Element, className: any) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi',
        ),
        ' ',
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    const docBody = document.body;

    if (this.state.mobileMenuActive) {
      if (docBody !== null) this.addClass(docBody, 'body-overflow-hidden');
    } else {
      if (docBody !== null) this.removeClass(docBody, 'body-overflow-hidden');
    }
  }

  render() {
    let logo =
      this.state.layoutColorMode === 'dark'
        ? 'assets/layout/images/logo-white.svg'
        : 'assets/layout/images/logo.svg';

    let wrapperClass = classNames('layout-wrapper', {
      'layout-overlay': this.state.layoutMode === 'overlay',
      'layout-static': this.state.layoutMode === 'static',
      'layout-static-sidebar-inactive':
        this.state.staticMenuInactive && this.state.layoutMode === 'static',
      'layout-overlay-sidebar-active':
        this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
      'layout-mobile-sidebar-active': this.state.mobileMenuActive,
    });
    let sidebarClassName = classNames('layout-sidebar', {
      'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => {
            this.sidebar = el;
            return this.sidebar;
          }}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
          onKeyDown={this.onSidebarClick}
        >
          <ScrollPanel
            ref={el => (this.layoutMenuScroller = el)}
            style={{ height: '100%' }}
          >
            <div className="layout-sidebar-scroll-content">
              <div className="layout-logo">
                <img alt="Logo" src={logo} />
              </div>
              <AppInlineProfile />
              <AppMenu
                model={this.menu}
                onMenuItemClick={this.onMenuItemClick}
              />
            </div>
          </ScrollPanel>
        </div>

        <div className="layout-main">
          <Route path="/" exact component={Dashboard} />
          <Route path="/forms" component={FormsDemo} />
          <Route path="/sample" component={SampleDemo} />
          <Route path="/data" component={DataDemo} />
          <Route path="/panels" component={PanelsDemo} />
          <Route path="/overlays" component={OverlaysDemo} />
          <Route path="/menus" component={MenusDemo} />
          <Route path="/messages" component={MessagesDemo} />
          <Route path="/charts" component={ChartsDemo} />
          <Route path="/misc" component={MiscDemo} />
          <Route path="/empty" component={EmptyPage} />
          <Route path="/documentation" component={Documentation} />
        </div>

        <AppFooter />

        <div className="layout-mask" />
      </div>
    );
  }
}

export default App;
