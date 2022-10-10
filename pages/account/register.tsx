import FormWrapper from '@/components/FormWrapper';
import { RegistrationSchema } from '@/schemas/account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type LoginInputs = {
  name: string;
  email: string;
  phone: number;
  password: string;
  password_confirmation: string;
};

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(RegistrationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FormWrapper>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component={'form'}
          className="flex flex-col items-stretch space-y-5"
        >
          <TextField
            fullWidth
            label="Full name"
            variant="outlined"
            {...register('name')}
            error={errors.name?.message ? true : false}
            helperText={errors.name?.message}
          />
          <TextField
            fullWidth
            type={'email'}
            label="Email address"
            variant="outlined"
            {...register('email')}
            error={errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            type={'tel'}
            label="Phone number"
            variant="outlined"
            {...register('phone')}
            error={errors.phone?.message ? true : false}
            helperText={errors.phone?.message}
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
          <TextField
            fullWidth
            type={'password'}
            variant="outlined"
            label="Confirm Password"
            {...register('password_confirmation')}
            error={errors.password_confirmation?.message ? true : false}
            helperText={errors.password_confirmation?.message}
          />
          <Button variant="contained" className="bg-blue-700" type="submit">
            Register
          </Button>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link href={'/account/login'}>
              <a className="font-medium text-blue-900 hover:underline">Login here</a>
            </Link>
          </p>
        </Box>
      </FormWrapper>
    </div>
  );
}
