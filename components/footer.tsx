import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full h-20 bg-slate-600 flex justify-center gap-3 items-center">
      <Button>알림</Button>
      <Button>좋아요</Button>
      <Button>설정</Button>
    </div>
  );
}
