import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { LOGIN_USER } from '../utils/mutations';
  import Auth from '../utils/auth';
  import { useState } from 'react';
  import { useMutation } from "@apollo/client";
   
  export default function SignIn(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [SignIn, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("woah nice submit")
      try {
        const mutationResponse = await SignIn({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
    <div className="flex mt-52 flex-col justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>

{/* this be where we input information reagarding our account*/}
        <form onSubmit={handleFormSubmit}>
        <CardBody className="flex flex-col gap-4">
        
          <label htmlFor="email">Email Address:</label>
          <Input 
            label="Email" 
            size="lg" 
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
          <Input 
            label="Password" 
            size="lg" 
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth type="submit">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
        </form>
      </Card>
      </div>
    );
  }