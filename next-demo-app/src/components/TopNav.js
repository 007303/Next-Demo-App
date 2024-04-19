"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TopNav = () => {
  return (
    <Menubar className="grid grid-cols-12 h-auto" style={{ border: "none" }}>
      <div className="col-span-4">
        <MenubarMenu>
          <MenubarTrigger>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={24}
              priority
            />
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="col-span-1">
        <MenubarMenu>
          <MenubarTrigger>Solutions</MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="col-span-1">
        <MenubarMenu>
          <MenubarTrigger>Use Cases</MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="col-span-1">
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="col-span-5 flex justify-end">
        <MenubarMenu>
          <MenubarTrigger>
            <Button>Request Demo</Button>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};

export default TopNav;
