import FormInput from "@/components/form/form-input"
import FormSelect from "@/components/form/form-select"
import { Button } from "@gravity-ui/uikit"
import { useForm } from "react-hook-form"

type Values = {
    name: string
    age: string
}

export default function Form() {
    const form = useForm<Values>()

    function handleSubmit(values: Values) {
        console.log(values)
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="">
            <FormInput methods={form} name="name" required fullWidth />
            <FormSelect
                methods={form}
                name="age"
                required
                options={[
                    {
                        value: "2",
                        label: "Variant",
                    },
                ]}
            />
            <Button type="submit">Save</Button>
        </form>
    )
}
