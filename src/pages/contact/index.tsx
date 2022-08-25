import { NextPage } from "next/types";
import { Container, Info, CustomForm } from "./styles";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { FiLock, FiMail } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdOutlinePerson } from "react-icons/md";
import { useCallback, useRef, useState } from "react";
import CustomInput from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import getValidationErrors from "../../utils/getValidationErrors";
import Toast from "../../components/Toast";

interface ContactMeData {
  name: string;
  email: string;
  message: string;
}

interface ResultMessage {
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export type TModelRegisterFormInputs = {
  Name: string;
  Email: string;
  Message: string;
};



const Contact: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const [result, setResult] = useState<string>('');

  const handleSubmit = useCallback(
    async (data: ContactMeData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          message: Yup.string().required('Escreva uma mensagem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });



        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            subject: `Contacto via website portfolio - ${data.name}`,
            name: data.name,
            email: data.email,
            message: data.message
          }),
          headers: {
            'Content-type': 'application/json'
          }
        });
        const { message } = await res.json();
        console.log(message);

        if (message === 'Email has been sent') {
          setResult('sucess');

          setTimeout(() => {
            setResult('');
          }, 9000);
        }
        if (message === 'Error sending email') {
          setResult('error');

          setTimeout(() => {
            setResult('');
          }, 9000);
        }


      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
        setResult('error');

        setTimeout(() => {
          setResult('');
        }, 9000);

      }
    },
    [],
  );

  function handleOnCloseToast() {
    setResult('');
  }

  return (
    <>
      {result === 'sucess' && (
        <Toast message={{
          id: "sucess_msg",
          title: "sucesso na submissao",
          type: 'success'
        }} key="teste" style={{}} onClick={handleOnCloseToast} />
      )}
      {result === 'error' && (
        <Toast message={{
          id: "error_msg",
          title: "erro na submissao",
          type: 'error'
        }} key="teste" style={{}} onClick={handleOnCloseToast} />
      )}
      <Container id="contact">
        <Info>
          <div>
            <h2>Contact information</h2>
            <p>Fill up the form and I will get in touch with you.</p>

            <h4><span>📞</span> +351 912042750</h4>
            <h4><span>📧</span> joao10garcez@gmail.com</h4>
            <h4><span>📍</span> Cascais, Lisboa</h4>
          </div>
        </Info>
        <CustomForm ref={formRef} onSubmit={handleSubmit}>
          <div className="first-div">
            <CustomInput name="name" icon={MdOutlinePerson} placeholder="Name" />
            <span className="divider" />
            <CustomInput name="email" icon={MdOutlineAlternateEmail} placeholder="Email" />

          </div>
          <div>
            <TextArea name="message" icon={FiMail} placeholder="Message" />
          </div>
          <Button className="btn-submit" type="submit">Submit</Button>
        </CustomForm>
      </Container>
    </>
  );
}

export default Contact;