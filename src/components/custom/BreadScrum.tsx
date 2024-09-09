import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  links,
}: {
  links: {
    label: string;
    to: string;
    active?: boolean;
  }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, i) => {
          if (i !== links.length - 1) {
            return (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to={link.to}>{link.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          }
          return (
            <BreadcrumbItem className="text-black font-semibold">
              <BreadcrumbLink>
                <Link to={link.to}>{link.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
