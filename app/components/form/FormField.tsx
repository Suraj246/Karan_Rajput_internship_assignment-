"use client";

import { ChangeEvent, useState } from "react";




import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import FormData from "./FormData";

export interface formDataType {
    name: string;
    email: string;
    phone: string;
    timeFrame: string;
    size: string;
    quantity: string;
    project: string;
}

const FormField = () => {
    const [formData, setForm] = useState<formDataType>({
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
        setForm({ ...formData, [key]: value });

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 7–15 digits";
        }
        if (!formData.timeFrame) newErrors.timeFrame = "Time frame is required";
        if (!formData.size) newErrors.size = "Size is required";
        if (!formData.quantity) newErrors.quantity = "Quantity is required";
        if (!formData.project.trim()) newErrors.project = "Project description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("FORM DATA:", formData);
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-20 px-4">
            <h1 className="text-center text-3xl font-bold tracking-wide mb-14">
                REQUEST A QUOTE
            </h1>

            <form onSubmit={submitHandler} className="space-y-12">
                <FormData formData={formData} errors={errors} inputHandle={inputHandle} />



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