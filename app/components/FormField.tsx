// "use client";

// import { ChangeEvent, useState } from "react";
// import {
//     Field,
//     FieldLabel,
// } from "@/components/ui/field";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//     Select,
//     SelectTrigger,
//     SelectValue,
//     SelectContent,
//     SelectItem,
// } from "@/components/ui/select";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRightIcon } from "lucide-react";

// const FormField = () => {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         timeFrame: "",
//         size: "",
//         quantity: "",
//         project: "",
//     });

//     const inputHandle = (key: string, value: string) =>
//         setForm({ ...form, [key]: value });

//     const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log("FORM DATA:", form);
//     };

//     return (
//         <div className="max-w-5xl mx-auto py-20 px-4">
//             <h1 className="text-center text-3xl font-bold tracking-wide mb-14">
//                 REQUEST A QUOTE
//             </h1>

//             <form onSubmit={submitHandler} className="space-y-12">

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                     <Field >
//                         < FieldLabel>Name</ FieldLabel>
//                         <Input
//                             value={form.name}
//                             onChange={(e) => inputHandle("name", e.target.value)}
//                             data-invalid={true}
//                             className="bg-[#F4F4F4]"
//                         />
//                     </Field>

//                     <Field>
//                         < FieldLabel>E-mail</ FieldLabel>
//                         <Input
//                             value={form.email}
//                             onChange={(e) => inputHandle("email", e.target.value)}
//                             className="bg-[#F4F4F4]"
//                         />

//                     </Field>

//                     <Field>
//                         < FieldLabel>Phone Number</ FieldLabel>
//                         <Input
//                             value={form.phone}
//                             onChange={(e) => inputHandle("phone", e.target.value)}
//                             className="bg-[#F4F4F4]"
//                         />

//                     </Field>

//                     <Field>
//                         < FieldLabel>Time Frame*</ FieldLabel>
//                         <Select onValueChange={(v: string) => inputHandle("timeFrame", v)}>
//                             <SelectTrigger className="bg-[#F4F4F4]">
//                                 <SelectValue placeholder="Choose Time Frame" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="1-week">1 Week</SelectItem>
//                                 <SelectItem value="2-weeks">2 Weeks</SelectItem>
//                                 <SelectItem value="1-month">1 Month</SelectItem>
//                             </SelectContent>
//                         </Select>

//                     </Field>

//                     <Field>
//                         < FieldLabel>Size*</ FieldLabel>
//                         <Select onValueChange={(v: string) => inputHandle("size", v)}>
//                             <SelectTrigger className="bg-[#F4F4F4]">
//                                 <SelectValue placeholder="Choose Size" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="small">Small</SelectItem>
//                                 <SelectItem value="medium">Medium</SelectItem>
//                                 <SelectItem value="large">Large</SelectItem>
//                             </SelectContent>
//                         </Select>

//                     </Field>

//                     <Field>
//                         < FieldLabel>Quantity*</ FieldLabel>
//                         <Select onValueChange={(v: string) => inputHandle("quantity", v)}>
//                             <SelectTrigger className="bg-[#F4F4F4]">
//                                 <SelectValue placeholder="Choose Quantity" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="1">1</SelectItem>
//                                 <SelectItem value="10">10</SelectItem>
//                                 <SelectItem value="100">100</SelectItem>
//                             </SelectContent>
//                         </Select>

//                     </Field>
//                 </div>
//                 <Field>
//                     < FieldLabel>Please Describe Your Project*</ FieldLabel>
//                     <Textarea
//                         className="min-h-[180px] bg-[#F4F4F4]"
//                         placeholder="Choose a project type"
//                         value={form.project}
//                         onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => inputHandle("project", e.target.value)}
//                     />

//                 </Field>

//                 <p className="text-center text-sm">
//                     By submitting this form you agree to our&nbsp;
//                     <Link href="#" className="text-blue-600 underline">
//                         Terms of Service&nbsp;
//                     </Link>
//                     and&nbsp;
//                     <Link href="#" className="text-blue-600 underline">
//                         Privacy Policy
//                     </Link>.
//                 </p>
//                 <div className="flex justify-center">
//                     <Button className="bg-[#1959AC]  text-center ">
//                         Lorem Ipsum <ArrowRightIcon />
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default FormField

"use client";

import { ChangeEvent, useState } from "react";
import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const FormField = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        timeFrame: "",
        size: "",
        quantity: "",
        project: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const inputHandle = (key: string, value: string) =>
        setForm({ ...form, [key]: value });

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{7,15}$/.test(form.phone)) {
            newErrors.phone = "Phone must be 7–15 digits";
        }
        if (!form.timeFrame) newErrors.timeFrame = "Time frame is required";
        if (!form.size) newErrors.size = "Size is required";
        if (!form.quantity) newErrors.quantity = "Quantity is required";
        if (!form.project.trim()) newErrors.project = "Project description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("FORM DATA:", form);
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-20 px-4">
            <h1 className="text-center text-3xl font-bold tracking-wide mb-14">
                REQUEST A QUOTE
            </h1>

            <form onSubmit={submitHandler} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input
                            value={form.name}
                            onChange={(e) => inputHandle("name", e.target.value)}
                            className="bg-[#F4F4F4]"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </Field>

                    {/* Email */}
                    <Field>
                        <FieldLabel>E-mail</FieldLabel>
                        <Input
                            value={form.email}
                            onChange={(e) => inputHandle("email", e.target.value)}
                            className="bg-[#F4F4F4]"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </Field>

                    {/* Phone */}
                    <Field>
                        <FieldLabel>Phone Number</FieldLabel>
                        <Input
                            value={form.phone}
                            onChange={(e) => inputHandle("phone", e.target.value)}
                            className="bg-[#F4F4F4]"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </Field>

                    {/* Time Frame */}
                    <Field>
                        <FieldLabel>Time Frame*</FieldLabel>
                        <Select onValueChange={(v: string) => inputHandle("timeFrame", v)}>
                            <SelectTrigger className="bg-[#F4F4F4]">
                                <SelectValue placeholder="Choose Time Frame" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-week">1 Week</SelectItem>
                                <SelectItem value="2-weeks">2 Weeks</SelectItem>
                                <SelectItem value="1-month">1 Month</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.timeFrame && <p className="text-red-500 text-sm">{errors.timeFrame}</p>}
                    </Field>

                    {/* Size */}
                    <Field>
                        <FieldLabel>Size*</FieldLabel>
                        <Select onValueChange={(v: string) => inputHandle("size", v)}>
                            <SelectTrigger className="bg-[#F4F4F4]">
                                <SelectValue placeholder="Choose Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="small">Small</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="large">Large</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
                    </Field>

                    {/* Quantity */}
                    <Field>
                        <FieldLabel>Quantity*</FieldLabel>
                        <Select onValueChange={(v: string) => inputHandle("quantity", v)}>
                            <SelectTrigger className="bg-[#F4F4F4]">
                                <SelectValue placeholder="Choose Quantity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
                    </Field>
                </div>

                {/* Project */}
                <Field>
                    <FieldLabel>Please Describe Your Project*</FieldLabel>
                    <Textarea
                        className="min-h-[180px] bg-[#F4F4F4]"
                        placeholder="Choose a project type"
                        value={form.project}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            inputHandle("project", e.target.value)
                        }
                    />
                    {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
                </Field>

                {/* Terms */}
                <p className="text-center text-sm">
                    By submitting this form you agree to our&nbsp;
                    <Link href="#" className="text-blue-600 underline">
                        Terms of Service&nbsp;
                    </Link>
                    and&nbsp;
                    <Link href="#" className="text-blue-600 underline">
                        Privacy Policy
                    </Link>.
                </p>

                {/* Submit */}
                <div className="flex justify-center">
                    <Button type="submit" className="bg-[#1959AC] text-center">
                        Lorem Ipsum <ArrowRightIcon />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormField;