import FormInput from '@/components/form/form-input';
import {Button} from '@gravity-ui/uikit';
import {useForm} from 'react-hook-form';

export default function Form() {
    const form = useForm<{name: string}>();

    function handleSubmit(values: {name: string}) {
        console.log(values);
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="">
            <FormInput form={form} name="name" required />
            <Button type='submit'>Save</Button>
        </form>
    );
}
