import FormWrapper from '@/components/FormWrapper';
import { LoginSchema } from '@/schemas/account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type LoginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FormWrapper>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component={'form'}
          className="flex flex-col items-stretch space-y-8"
        >
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            type={'email'}
            {...register('email')}
            error={errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type={'password'}
            variant="outlined"
            {...register('password')}
            error={errors.password?.message ? true : false}
            helperText={errors.password?.message}
          />
          <Button variant="contained" className="bg-blue-700" type="submit">
            Login
          </Button>
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link href={'/account/register'}>
              <a className="font-medium text-blue-900 hover:underline">Register here</a>
            </Link>
          </p>
        </Box>
      </FormWrapper>
    </div>
  );
}
