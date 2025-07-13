"use client";

import { useContext } from "react";
import { AuthContext } from "@/components/context/AuthProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type LoginFormElement = HTMLFormElement & {
    elements: {
        email: HTMLInputElement;
        password: HTMLInputElement;
    };
};

export default function Login() {
    const authContext = useContext(AuthContext);
    const router = useRouter()

    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    const { userLogin, googleLoginUser, setLoading } = authContext;

    const handleLogin = async (e: React.FormEvent<LoginFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value;

        setLoading(true);
        try {
            const currentUser = await userLogin(email, password);
            if (currentUser.user) {
                toast.success("Login Successful");
                form.reset();
                router.push('/')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Please Enter Valid Email And Password");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleUser = async () => {
        setLoading(true);
        try {
            const result = await googleLoginUser();
            if (result.user) {
                toast.success("Login Successful with Google");
                router.push('/')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Google Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md shadow-2xl bg-base-100 rounded-2xl overflow-hidden p-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button className="btn bg-emerald w-full mt-4" type="submit">
                        Login
                    </button>

                    <div className="divider">OR</div>

                    <button
                        type="button"
                        className="btn btn-outline w-full"
                        onClick={handleGoogleUser}
                    >
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-4">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="link link-emerald">
                            Sign up here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
