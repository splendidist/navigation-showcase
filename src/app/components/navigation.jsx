"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            title="Primary Colours"
            className="NavigationMenuTrigger"
          >
            Primary Colours
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List-one">
              <NavigationMenu.Link className="Link" href="/red" title="Red">
                Red
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className="Link"
                href="/yellow"
                title="Yellow"
              >
                Yellow
              </NavigationMenu.Link>
              <NavigationMenu.Link className="Link" href="/blue" title="Blue">
                Blue
              </NavigationMenu.Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            title="Secondary Colours"
            className="NavigationMenuTrigger"
          >
            Secondary Colours
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List-two">
              <NavigationMenu.Link className="Link" title="Green" href="/green">
                Green
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className="Link"
                title="Orange"
                href="/orange"
              >
                Orange
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className="Link"
                title="Purple"
                href="/purple"
              >
                Purple
              </NavigationMenu.Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            Title="Home"
            className="NavigationMenuLink"
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
}
