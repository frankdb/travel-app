"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInWithMagicLink(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Check your email for the magic link" };
}

export async function signOut() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  console.log("User is signing out", user);
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
