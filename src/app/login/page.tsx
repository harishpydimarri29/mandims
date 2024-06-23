import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/utils/supabase/authActions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();
  let user = await supabase.auth.getUser();
  if (user?.data?.user !== null) {
    redirect("/");
  }
  return (
    <div className="p-3">
      <form className="flex justify-center">
        <div className="flex flex-col gap-5">
          <div className="grid w-[300px] max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="grid w-auto max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <Button type="submit" formAction={login}>Login</Button>
        </div>
      </form>
    </div>
  );
}
// import { login, signup } from '@/utils/supabase/authActions'

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }
