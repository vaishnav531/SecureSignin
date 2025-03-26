import { useState } from "react";
import { Input } from "./Input.jsx";
import { Button } from "./Button.jsx";
import { Card, CardContent } from "./Card.jsx";
import { Checkbox } from "./Checkbox.jsx";

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Generate initial CAPTCHA
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setCaptchaError("");

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    if (captchaInput.toUpperCase() !== captcha) {
      setCaptchaError("Incorrect CAPTCHA. Try again.");
      setCaptcha(generateCaptcha()); 
      setCaptchaInput(""); 
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!"); 
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Company Logo" className="mx-auto w-20 mb-2" />
          <h2 className="text-xl font-semibold">Login Page</h2>
        </div>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input 
                id="email" 
                type="text" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                aria-label="Email input field" 
                className="w-full" 
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                aria-label="Password input field" 
                className="w-full" 
              />
            </div>

            <div className="flex flex-col items-center bg-gray-200 p-3 rounded-lg">
              <span className="text-lg font-semibold tracking-wider">{captcha}</span>
              <Input 
                type="text" 
                placeholder="Enter CAPTCHA" 
                value={captchaInput} 
                onChange={(e) => setCaptchaInput(e.target.value)} 
                required 
                className="mt-2 text-center uppercase" 
              />
              {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
              <button 
                type="button" 
                onClick={() => setCaptcha(generateCaptcha())} 
                className="text-blue-500 text-sm mt-1 hover:underline"
              >
                Refresh CAPTCHA
              </button>
            </div>

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm ml-2">Remember me</label>
              </div>
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
              {loading && <span className="animate-spin">🔄</span>} Login
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
