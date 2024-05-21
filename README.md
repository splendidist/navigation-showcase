npm i @radix-ui/react-navigation-menu

/app/components/navigation

import \* as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function NavMenu() {
return (
<NavigationMenu.Root>
<NavigationMenu.List>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
        Menu Item Name 1
        <NavigationMenu.Trigger>

        <NavigationMenu.Content>
          <NavigationMenu.Link>
          Link 1
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 2
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 3
          </NavigationMenu.link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
        Menu Item Name 2
        <NavigationMenu.Trigger>

        <NavigationMenu.Content>
          <NavigationMenu.Link>
          Link 1
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 2
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 3
          </NavigationMenu.link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

     <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>

    </NavigationMenu.List>

    <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
      </NavigationMenu.Root>
      );}
