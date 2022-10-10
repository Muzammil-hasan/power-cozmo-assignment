import FormWrapper from '@/components/FormWrapper';
import LoadingIcon from '@/components/icons/LoadingIcon';
import { axiosClient } from '@/config/api';
import { LoginSchema } from '@/schemas/account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { localSetter, onError, onSuccess } from 'utils';

type LoginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const form = useForm<LoginInputs>({ resolver: zodResolver(LoginSchema) });
  const { errors } = form.formState;

  const { mutate, isLoading } = useMutation(
    (data: LoginInputs) => axiosClient.post('/login', data),
    {
      onSuccess: ({ data }) => {
        form.reset();
        onSuccess(data.message);
        localSetter('user', data.result);
        localSetter('token', data.token);
        router.push('/account');
      },
      onError: () => onError(),
    }
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FormWrapper>
        <Box
          onSubmit={form.handleSubmit((data: LoginInputs) => mutate(data))}
          component={'form'}
          className="flex flex-col items-stretch space-y-8"
        >
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            type={'email'}
            {...form.register('email')}
            error={errors.email?.message ? true : false}
            helperText={errors.email?.message}
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
          <Button variant="contained" className="bg-blue-700" type="submit" disabled={isLoading}>
            {isLoading ? <LoadingIcon className="w-6 h-6 text-white" /> : 'Login'}
          </Button>

          <p className="text-sm text-center">
            Don't have an account?
            <Link href={'/account/register'}>
              <a className="font-medium text-blue-900 hover:underline"> Register here</a>
            </Link>
          </p>
        </Box>
      </FormWrapper>
    </div>
  );
}
