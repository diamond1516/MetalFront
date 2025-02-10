import { REQUIRED_MESSAGE } from "@/constants/components"
import { Select, SelectOption, SelectProps } from "@gravity-ui/uikit"
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    required?: boolean
    options?: (SelectOption & { label: string })[]
}

export default function FormSelect<IForm extends FieldValues>({
    methods,
    name,
    required = false,
    options,
    multiple,
    ...props
}: IProps<IForm> & Omit<SelectProps, "onChange" | "value">) {
    return (
        <Controller
            control={methods.control}
            name={name}
            rules={{
                required: {
                    value: required,
                    message: REQUIRED_MESSAGE,
                },
            }}
            render={({ field, fieldState }) => (
                <Select
                    {...props}
                    {...field}
                    value={
                        Array.isArray(field.value) ? field.value
                        : field.value ?
                            [field.value]
                        :   []
                    }
                    validationState={fieldState.error ? "invalid" : undefined}
                    errorMessage={fieldState.error?.message}
                    multiple={multiple}
                    onUpdate={(v) =>
                        field.onChange({
                            target: {
                                value: multiple ? v : v[0],
                            },
                        })
                    }
                >
                    {options?.map((opt) => (
                        <Select.Option
                            key={opt.value}
                            value={opt.value.toString()}
                        >
                            {opt.label}
                        </Select.Option>
                    ))}
                </Select>
            )}
        />
    )
}
