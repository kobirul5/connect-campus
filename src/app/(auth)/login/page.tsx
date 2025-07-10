export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md shadow-2xl bg-base-100 rounded-2xl overflow-hidden p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-4">Login</button>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <a href="/register" className="link link-primary">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
