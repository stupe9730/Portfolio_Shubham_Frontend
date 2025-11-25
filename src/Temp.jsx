import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, TextField, Box, Button } from '@mui/material';
import { useSendMailMutation } from './redux/AdminApi';
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const MyForm = () => {


    const [sedmail, { isLoading, isSuccess }] = useSendMailMutation()
    const formik = useFormik({
        initialValues: {
            name: '',
            message: '',
            subject: '',
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle your form submission logic here
            console.log(values);
            sedmail(values)
            // resetForm();
        },
    });

    useEffect(() => {
        if (isSuccess) {
            toast.success("Email Send Success")
        }
    }, [isSuccess])
    return <>
        <Card sx={{ marginTop: 3, padding: 2, marginX: 1 }}>
            <Box sx={{ display: { sm: "flex", xs: "block" }, alignItems: "center", marginY: { md: 2, xs: 1 } }}>
                <TextField
                    fullWidth
                    label="Name"
                    placeholder='Enter Your Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="name"
                    sx={{ marginRight: 2, marginY: { md: 0, xs: 3 } }}
                    value={formik.values.to}
                    error={formik.touched.to && Boolean(formik.errors.to)}
                    helperText={formik.touched.to && formik.errors.to}
                />
                <TextField
                    fullWidth
                    label="Email"
                    // sx={{ marginTop: 3 }}
                    placeholder='Enter Your Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Box>

            <TextField
                fullWidth
                label="Subject"
                placeholder='Enter Your Subject'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="subject"
                value={formik.values.subject}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
            />
            <TextField
                fullWidth
                rows={3}
                sx={{
                    marginTop: 3,
                    // height: 1l0,
                    marginBottom: 4,
                    '& input': {
                        height: '70px',
                    },
                    '& textarea': {
                        minHeight: '40px',
                    },
                }}
                placeholder='Message'
                onChange={formik.handleChange}
                label="message"
                onBlur={formik.handleBlur}
                name="message"
                multiline
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
            />
            <Box sx={{ textAlign: "end" }}>
                <Button onClick={formik.handleSubmit} variant='contained' sx={{ marginY: 0 }}>{`${isLoading ? "Loading" : "Submit"}`}</Button>
            </Box>




        </Card>
    </>
};

export default MyForm;
