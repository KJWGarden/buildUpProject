import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export default function Header() {
  return (
    <div className="w-full h-14 bg-slate-600 flex items-center">
      <div className="p-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>주제검색</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>테마검색</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>컬렉션</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>즐겨찾기</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>환경설정</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-xl font-semibold text-white">title</div>
      <div className="fixed right-3 w-auto flex gap-2">
        <Button>공유</Button>
        <Button>검색</Button>
      </div>
    </div>
  );
}
