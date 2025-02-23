"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Схема валидации
const paymentSchema = z.object({
  fullName: z.string().min(2, "Введите полное имя"),
  email: z.string().email("Некорректный email"),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Номер карты должен содержать 16 цифр"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Формат MM/YY"),
  cvv: z.string().regex(/^\d{3}$/, "CVV должен содержать 3 цифры"),
});

const PaymentForm = () => {
  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  // Обработчик отправки
  const onSubmit = (data: any) => {
    console.log("Оплата:", data);
    alert("Оплата успешно проведена!");
  };

  return (
    <div className="py-[70px]">
      <Card className="w-full max-w-md mx-auto mt-10 p-6 shadow-lg">
        <CardHeader>
          <CardTitle>Оплата заказа</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Поле ФИО */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ФИО</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Иванов" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле номера карты */}
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Номер карты</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="1234567812345678"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле срока действия */}
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Срок действия (MM/YY)</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="12/25" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле CVV */}
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Оплатить
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentForm;
