import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
    Field,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formDataType } from './FormField'

interface FormDataProps {
    formData: formDataType;
    errors: Record<string, string>;
    inputHandle: (key: string, value: string) => void;
}
const FormData: React.FC<FormDataProps> = ({ formData, errors, inputHandle }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                        value={formData.name}
                        onChange={(e) => inputHandle("name", e.target.value)}
                        className="bg-[#F4F4F4]"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </Field>

                <Field>
                    <FieldLabel>E-mail</FieldLabel>
                    <Input
                        value={formData.email}
                        onChange={(e) => inputHandle("email", e.target.value)}
                        className="bg-[#F4F4F4]"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </Field>

                <Field>
                    <FieldLabel>Phone Number</FieldLabel>
                    <Input
                        value={formData.phone}
                        onChange={(e) => inputHandle("phone", e.target.value)}
                        className="bg-[#F4F4F4]"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </Field>

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
            <Field>
                <FieldLabel>Please Describe Your Project*</FieldLabel>
                <Textarea
                    className="min-h-[180px] bg-[#F4F4F4]"
                    placeholder="Choose a project type"
                    value={formData.project}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        inputHandle("project", e.target.value)
                    }
                />
                {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
            </Field>
        </div>
    )
}

export default FormData
