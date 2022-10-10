import FormWrapper from '@/components/FormWrapper';
import LoadingIcon from '@/components/icons/LoadingIcon';
import { axiosClient } from '@/config/api';
import { RegistrationSchema } from '@/schemas/account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { onError, onSuccess } from 'utils';

type RegisterInputs = {
  name: string;
  email: string;
  phone: number;
  password: string;
  password_confirmation: string;
};

export default function Register() {
  const router = useRouter();
  const form = useForm<RegisterInputs>({ resolver: zodResolver(RegistrationSchema) });
  const { errors } = form.formState;

  const { mutate, isLoading, status, data } = useMutation((data: RegisterInputs) =>
    axiosClient.post('/register', data)
  );

  useEffect(() => {
    if (status === 'success') {
      onSuccess(data.data.message);
      form.reset();
      router.push('/account/login');
    } else if (status === 'error') onError();
  }, [status]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FormWrapper>
        <Box
          component={'form'}
          className="flex flex-col items-stretch space-y-5"
          onSubmit={form.handleSubmit((data: RegisterInputs) => mutate(data))}
        >
          <TextField
            fullWidth
            label="Full name"
            variant="outlined"
            {...form.register('name')}
            error={errors.name?.message ? true : false}
            helperText={errors.name?.message}
          />
          <TextField
            fullWidth
            type={'email'}
            label="Email address"
            variant="outlined"
            {...form.register('email')}
            error={errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            type={'tel'}
            label="Phone number"
            variant="outlined"
            {...form.register('phone')}
            error={errors.phone?.message ? true : false}
            helperText={errors.phone?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type={'password'}
            variant="outlined"
            {...form.register('password')}
            error={errors.password?.message ? true : false}
            helperText={errors.password?.message}
          />
          <TextField
            fullWidth
            type={'password'}
            variant="outlined"
            label="Confirm Password"
            {...form.register('password_confirmation')}
            error={errors.password_confirmation?.message ? true : false}
            helperText={errors.password_confirmation?.message}
          />
          <Button variant="contained" className="bg-blue-700" type="submit" disabled={isLoading}>
            {isLoading ? <LoadingIcon className="w-6 h-6 text-white" /> : 'Register'}
          </Button>

          <p className="text-sm text-center">
            Already have an account?
            <Link href={'/account/login'}>
              <a className="font-medium text-blue-900 hover:underline"> Login here</a>
            </Link>
          </p>
        </Box>
      </FormWrapper>
    </div>
  );
}
