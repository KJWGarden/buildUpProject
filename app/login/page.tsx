import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="w-full flex-col justify-items-center">
      <div className="text-4xl font-extrabold pt-32">BIBLE UP</div>
      <div className="w-1/4 pt-10 flex-col space-y-4">
        <Input type="id" placeholder="Id" />
        <Input type="password" placeholder="password" />
      </div>
      <div className="pt-10">
        <Button>Login</Button>
      </div>
    </div>
  );
}
