import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = ({ links }: { links: any }) => {
  return (
    <div className="flex">
      {links.map((link: any) => (
        <DropdownMenu key={link.id}>
          <DropdownMenuTrigger asChild className="cursor-pointer ">
            <div className="flex items-center justify-center gap-2 mx-3">
              <button>{link.label}</button>
              {link.isChildren && (
                <img src="/icons/downarrow.svg" alt="downarrow" />
              )}
            </div>
          </DropdownMenuTrigger>
          {link.isChildren && (
            <DropdownMenuContent className="w-56">
              {link.children.map((child: any, index: number) => (
                <DropdownMenuItem key={index}>
                  <a href={child.link}>{child.item}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      ))}
    </div>
  );
};

export default Navbar;
