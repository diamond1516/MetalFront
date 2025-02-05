import {REQUIRED_MESSAGE} from '@/constants/components';
import {cn} from '@/lib/utils';
import {TextInput, TextInputProps} from '@gravity-ui/uikit';
import {FieldValues, Path, UseFormReturn} from 'react-hook-form';
import {ClassNameValue} from 'tailwind-merge';

interface IProps<IForm extends FieldValues> {
    form: UseFormReturn<IForm>;
    name: Path<IForm>;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    wrapperClassName?: ClassNameValue;
}

export default function FormInput<IForm extends FieldValues>({
    form,
    name,
    label,
    fullWidth = false,
    wrapperClassName,
    ...props
}: IProps<IForm> & TextInputProps) {
    const {
        register,
        formState: {errors},
    } = form;

    const reg = register(name, {
        required: {
            value: true,
            message: `${label ?? ''} ${REQUIRED_MESSAGE}`,
        },
    });

    console.log(cn('flex flex-col gap-1 w-full'));

    return (
        <fieldset className={cn('flex flex-col gap-2 w-xs', wrapperClassName)}>
            <TextInput
                type="text"
                error={!!errors[name]}
                errorMessage={errors[name] ? errors[name].message?.toString() : ''}
                placeholder={label}
                {...props}
                {...reg}
            />
        </fieldset>
    );
}
