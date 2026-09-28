import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const ref = useRef();
    const refPassword = useRef();

    const getPasswords = async () => {
        let req = await fetch("https://vaultix-mongo.vercel.app");
        let passwords = await req.json();
        setPasswordArray(passwords);
        console.log(passwords);
    }

    useEffect(() => {
        getPasswords();
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes("/eyecross.png")) {
            refPassword.current.type = "password";
            ref.current.src = "/system-solid-69-eye-hover-pinch.gif";
        } else {
            refPassword.current.type = "text";
            ref.current.src = "/eyecross.png";
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length >= 8) {

            if (form.id) {
                await fetch("https://vaultix-mongo.vercel.app", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: form.id })
                });
            }

            const newPassword = {
                ...form,
                id: uuidv4()
            };

            await fetch("https://vaultix-mongo.vercel.app", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPassword)
            });

            setPasswordArray([...passwordArray, newPassword]);

            setForm({
                site: "",
                username: "",
                password: ""
            });

            toast.success('Password saved in Vaultix!🔐', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

        } else {
            toast("Error : Information not Saved Enter Full information please!")
        }
    }

    const deletePassword = async (id) => {
        console.log(`Deleting Password with id ${id}`);

        let del = confirm("Do you really want to delete this password?")

        if (del) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));

            await fetch("https://vaultix-mongo.vercel.app", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            });

            toast.success('Password removed from Vaultix!🔐', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }

    const editPassword = (id) => {
        console.log(`Edit Password with id ${id}`);

        const passwordToEdit = passwordArray.find(item => item.id === id);

        setForm(passwordToEdit);

        setPasswordArray(
            passwordArray.filter(item => item.id !== id)
        );
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast.success('🔐 Vaultix copied it for you!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-8 sm:py-8">

                <h1 className="text-3xl sm:text-4xl font-bold text-center py-6">
                    <span className="text-green-500"> / &lt;</span>
                    Vaultix
                    <span className="text-green-500">Pass/ &gt;</span>
                </h1>

                <p className="text-green-900 italic text-center text-base sm:text-lg mt-1">
                    Your Own Password Manager
                </p>

                <div className="text-white flex flex-col gap-5 sm:gap-8 p-2 sm:p-4 items-center">

                    <input
                        onChange={handleChange}
                        value={form.site}
                        className="rounded-full border w-full text-black px-4 py-2 border-green-950 outline-none focus:ring-2 focus:ring-green-400"
                        type="text"
                        name="site"
                        id="site"
                        placeholder="Enter Website URL"
                    />

                    <div className="flex md:flex-row flex-col w-full justify-between gap-4 md:gap-8">

                        <input
                            onChange={handleChange}
                            value={form.username}
                            className="rounded-full border w-full text-black px-4 py-2 border-green-950 outline-none focus:ring-2 focus:ring-green-400"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        />

                        <div className="relative w-full">

                            <input
                                ref={refPassword}
                                onChange={handleChange}
                                value={form.password}
                                className="rounded-full border w-full text-black px-4 py-2 pr-11 border-green-950 outline-none focus:ring-2 focus:ring-green-400"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />

                            <span
                                onClick={showPassword}
                                className="absolute text-black right-2 top-1/2 -translate-y-1/2"
                            >
                                <img
                                    ref={ref}
                                    src="/system-solid-69-eye-hover-pinch.gif"
                                    alt="eye"
                                    className="w-7 h-7 cursor-pointer"
                                />
                            </span>

                        </div>

                    </div>

                    <button
                        onClick={savePassword}
                        className="bg-green-400 gap-2 rounded-4xl flex items-center justify-center hover:cursor-pointer hover:bg-green-300 border-2 border-green-400 w-fit px-4 sm:px-6"
                    >
                        <img
                            src="/doodle-motif-49-plus-circle-hover-pinch (1).gif"
                            alt="Add"
                            className="w-10 h-10 sm:w-12 sm:h-12"
                        />

                        <span className="py-2.5 font-bold text-black text-sm sm:text-base">
                            Save Password
                        </span>
                    </button>

                </div>

                <div className="passwords mt-4 sm:mt-6">

                    <h2 className="font-bold text-xl sm:text-2xl px-1 sm:px-3 py-2">
                        Vaultix Passwords
                    </h2>

                    {passwordArray.length === 0 && (
                        <div className="px-1 sm:px-3 py-2">
                            No Passwords to Show
                        </div>
                    )}

                    {passwordArray.length !== 0 && (

                        <div className="w-full overflow-x-auto rounded-xl">

                            <table className="table-auto w-full min-w-[650px] border-2 overflow-hidden rounded-xl cursor-pointer">

                                <thead className="bg-green-800 text-white">

                                    <tr>
                                        <th className="py-2 px-2 sm:px-3 text-sm sm:text-md">
                                            Site
                                        </th>

                                        <th className="py-2 px-2 sm:px-3 text-sm sm:text-md">
                                            Username
                                        </th>

                                        <th className="py-2 px-2 sm:px-3 text-sm sm:text-md">
                                            Password
                                        </th>

                                        <th className="py-2 px-2 sm:px-3 text-sm sm:text-md">
                                            Actions
                                        </th>
                                    </tr>

                                </thead>

                                <tbody className="bg-green-200">

                                    {passwordArray.map((item, index) => {

                                        return (
                                            <tr key={index}>

                                                <td className="py-2 px-2 sm:px-3 border border-white text-center">

                                                    <div className="flex items-center justify-center gap-2 min-w-max">

                                                        <a
                                                            href={item.site}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline max-w-[180px] truncate"
                                                        >
                                                            {item.site}
                                                        </a>

                                                        <div
                                                            onClick={() => {
                                                                copyText(item.site)
                                                            }}
                                                            className="iconCopy cursor-pointer shrink-0"
                                                        >
                                                            <img
                                                                src="/copy.gif"
                                                                alt="copy"
                                                                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:bg-amber-50"
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                                <td className="py-2 px-2 sm:px-3 border border-white text-center">

                                                    <div className="flex items-center justify-center gap-2 min-w-max">

                                                        <a
                                                            href={item.username}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline max-w-[180px] truncate"
                                                        >
                                                            {item.username}
                                                        </a>

                                                        <div
                                                            onClick={() => {
                                                                copyText(item.username)
                                                            }}
                                                            className="iconCopy cursor-pointer shrink-0"
                                                        >
                                                            <img
                                                                src="/copy.gif"
                                                                alt="copy"
                                                                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:bg-amber-50"
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                                <td className="py-2 px-2 sm:px-3 border border-white text-center">

                                                    <div className="flex items-center justify-center gap-2 min-w-max">

                                                        <span className="max-w-[180px] truncate">
                                                            {"•".repeat(item.password.length)}
                                                        </span>

                                                        <div
                                                            onClick={() => {
                                                                copyText(item.password)
                                                            }}
                                                            className="iconCopy cursor-pointer shrink-0"
                                                        >
                                                            <img
                                                                src="/copy.gif"
                                                                alt="copy"
                                                                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:bg-amber-50"
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                                <td className="py-2 px-2 sm:px-3 border border-white text-center">

                                                    <span className="flex justify-center items-center gap-2">

                                                        <img
                                                            onClick={() => {
                                                                editPassword(item.id)
                                                            }}
                                                            src="/system-solid-35-pencil-hover-pinch.gif"
                                                            alt="Edit"
                                                            className="w-6 h-6 cursor-pointer hover:bg-amber-50"
                                                        />

                                                        <img
                                                            onClick={() => {
                                                                deletePassword(item.id)
                                                            }}
                                                            src="/system-solid-185-trash-bin-hover-pinch.gif"
                                                            alt="Delete"
                                                            className="w-6 h-6 cursor-pointer hover:bg-amber-50"
                                                        />

                                                    </span>

                                                </td>

                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </table>

                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Manager;