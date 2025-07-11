'use client'
import { AuthContext } from "@/components/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

type RegisterFormElement = HTMLFormElement & {
    elements: {
        name: HTMLInputElement;
        email: HTMLInputElement;
        password: HTMLInputElement;
    };
};

export default function SignUp() {
    const authContext = useContext(AuthContext);
    const router = useRouter()

    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { userCreate,updateUserProfile, setLoading, googleLoginUser} = authContext;

    const handleRegister = async (e: React.FormEvent<RegisterFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value;
        console.log(name)

        try {
            const userCredential = await userCreate(email, password);
            const user = userCredential.user;
            console.log(user)
            if (user.email) {
                updateUserProfile(name,'' )
                    .then(() => {
                        toast.success("Sign Up Successful")
                    })
                    form.reset();
                    router.push('/')
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred during registration");
            }
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
        <div className="py-12 flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md shadow-2xl bg-base-100 rounded-2xl overflow-hidden">
                {/* Sign Up Form Only */}
                <div className="p-10">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

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
                                minLength={6}
                            />
                        </div>

                        <button className="btn btn-primary w-full mt-4" type="submit">
                            Create Account
                        </button>

                        <div className="divider">OR</div>

                        <button onClick={()=>handleGoogleUser()} className="btn btn-outline w-full" type="button">
                            Continue with Google
                        </button>

                        <p className="text-center text-sm mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="link link-primary">
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
