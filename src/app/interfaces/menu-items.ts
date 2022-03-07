export interface MenuItems {
  title: string,
  icon: string
  submenus: SubMenu[]
}

export interface SubMenu {
  title: string, url: string
}
