"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function sendCode() {
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setCodeSent(true);
    toast.success("Code sent. Check your email.");
  }

  async function verifyCode() {
    setBusy(true);
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Logged in");
    router.push("/");
  }

  return (
    <main className="bg-base min-h-screen px-6 py-16">
      <div className="max-w-sm mx-auto">
        <h1 className="font-serif text-navy text-3xl mb-6 text-center">
          Login
        </h1>

        {!codeSent ? (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-charcoal/20 rounded-full px-5 py-3 text-sm"
            />
            <button
              onClick={sendCode}
              disabled={busy || !email}
              className="w-full bg-navy text-white py-3 rounded-full hover:bg-teal transition-colors disabled:opacity-50"
            >
              {busy ? "Sending..." : "Send Code"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-charcoal/70 text-center">
              Enter the code sent to {email}
            </p>
            <input
              type="text"
              placeholder="Code from email"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-charcoal/20 rounded-full px-5 py-3 text-sm text-center tracking-widest"
            />
            <button
              onClick={verifyCode}
              disabled={busy || !code}
              className="w-full bg-navy text-white py-3 rounded-full hover:bg-teal transition-colors disabled:opacity-50"
            >
              {busy ? "Verifying..." : "Verify & Login"}
            </button>
            <button
              onClick={() => setCodeSent(false)}
              className="w-full text-sm text-charcoal/60 underline"
            >
              Use a different email
            </button>
          </div>
        )}
      </div>
    </main>
  );
}