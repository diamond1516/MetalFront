import { REQUIRED_MESSAGE } from "@/constants/components"
import { cn } from "@/lib/utils"
import { TextInput, TextInputProps } from "@gravity-ui/uikit"
import { ReactNode } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    required?: boolean
    fullWidth?: boolean
    wrapperClassName?: ClassNameValue
}

export default function FormInput<IForm extends FieldValues>({
    methods,
    name,
    label,
    fullWidth = false,
    wrapperClassName,
    required = false,
    ...props
}: IProps<IForm> & TextInputProps) {
    const {
        register,
        formState: { errors },
    } = methods

    const reg = register(name, {
        required: {
            value: required,
            message: `${label ?? ""} ${REQUIRED_MESSAGE}`,
        },
    })

    return (
        <fieldset
            className={cn(
                "flex flex-col gap-2 w-xs",
                wrapperClassName,
                fullWidth && "w-full",
            )}
        >
            <TextInput
                type="text"
                error={!!errors[name]}
                errorMessage={
                    typeof errors[name]?.message === "string" ?
                        (errors[name]?.message as ReactNode)
                    :   ""
                }
                placeholder={label}
                {...props}
                {...reg}
            />
        </fieldset>
    )
}
